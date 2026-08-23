import { describe, it, expect } from 'vitest';
import {
  canonicalKeyFor, parseCanonicalKey, candidatePathsFor,
  aliasableNames, findFatalDuplicates, assertSafeExportName,
  classifyDirents, isCollectionItem, type KeyedEntry, type DirentLike,
} from '../src/keys';

const entry = (over: Partial<KeyedEntry>): KeyedEntry => ({
  canonicalKey: 'pages.blog', bareName: 'blog', subdir: 'pages',
  kind: 'file', relPath: 'pages/blog.json', ...over,
});

describe('canonicalKeyFor', () => {
  it('prefixes with the subdir and leaves site alone', () => {
    expect(canonicalKeyFor('pages', 'blog')).toBe('pages.blog');
    expect(canonicalKeyFor('data', 'posts')).toBe('data.posts');
    expect(canonicalKeyFor(null, 'site')).toBe('site');
  });
});

describe('parseCanonicalKey', () => {
  it('splits a namespaced key into root, name, and field path', () => {
    expect(parseCanonicalKey('pages.blog.hero.title')).toEqual({
      root: 'pages', bareName: 'blog', path: ['hero', 'title'],
    });
  });

  it('treats site as its own root with no bare-name segment', () => {
    expect(parseCanonicalKey('site.brand')).toEqual({
      root: 'site', bareName: 'site', path: ['brand'],
    });
  });

  it('rejects an empty key', () => {
    expect(parseCanonicalKey('')).toMatchObject({ error: 'invalid-key' });
  });

  it('reports a legacy bare key as bare rather than invalid', () => {
    expect(parseCanonicalKey('home.hero')).toEqual({
      root: null, bareName: 'home', path: ['hero'],
    });
  });

  it('reports a bare key with no field path', () => {
    expect(parseCanonicalKey('home')).toEqual({ root: null, bareName: 'home', path: [] });
  });

  it('rejects a bare name that is not a JS identifier', () => {
    expect(parseCanonicalKey('blog-posts.title')).toMatchObject({ error: 'invalid-key' });
  });

  it('reads a leading pages/data segment as the namespace, never as a bare name', () => {
    // D9 reserves site/pages/data as content file names, so this is unambiguous
    expect(parseCanonicalKey('pages.hero')).toEqual({
      root: 'pages', bareName: 'hero', path: [],
    });
  });
});

describe('candidatePathsFor', () => {
  it('gives exactly one file candidate plus the collection dir for a data key', () => {
    expect(candidatePathsFor('data.posts')).toEqual({
      relPaths: ['data/posts.json', 'data/posts'],
    });
  });

  it('gives one candidate for a pages key — no cross-namespace probing', () => {
    expect(candidatePathsFor('pages.blog')).toEqual({ relPaths: ['pages/blog.json'] });
  });

  it('refuses a bare key — those resolve through discovery, not a path guess', () => {
    expect(candidatePathsFor('home')).toMatchObject({ error: expect.stringMatching(/discovery/) });
  });
});

describe('aliasableNames', () => {
  it('aliases a name owned by exactly one entry', () => {
    const names = aliasableNames([entry({}), entry({
      canonicalKey: 'data.posts', bareName: 'posts', subdir: 'data', relPath: 'data/posts',
      kind: 'collection',
    })]);
    expect([...names].sort()).toEqual(['blog', 'posts']);
  });

  it('withholds the alias when two namespaces claim one name', () => {
    const names = aliasableNames([entry({}), entry({
      canonicalKey: 'data.blog', subdir: 'data', relPath: 'data/blog', kind: 'collection',
    })]);
    expect(names.has('blog')).toBe(false);
  });
});

describe('classifyDirents', () => {
  const d = (name: string, isDirectory: boolean = false): DirentLike => ({ name, isDirectory });

  it('classifies a .json file as a file entry keyed by its stem', () => {
    expect(classifyDirents('pages', [d('blog.json')])).toEqual([{
      canonicalKey: 'pages.blog', bareName: 'blog', subdir: 'pages',
      kind: 'file', relPath: 'pages/blog.json',
    }]);
  });

  it('classifies a directory under data/ as a collection', () => {
    expect(classifyDirents('data', [d('posts', true)])).toEqual([{
      canonicalKey: 'data.posts', bareName: 'posts', subdir: 'data',
      kind: 'collection', relPath: 'data/posts',
    }]);
  });

  it('ignores a directory under pages/ — collections are data/-only', () => {
    expect(classifyDirents('pages', [d('blog', true)])).toEqual([]);
  });

  it('ignores non-json files', () => {
    expect(classifyDirents('data', [d('notes.txt'), d('README.md')])).toEqual([]);
  });

  it('treats a .json-named directory as a file entry so the caller surfaces the read error', () => {
    const out: KeyedEntry[] = classifyDirents('pages', [d('home.json', true)]);
    expect(out).toHaveLength(1);
    expect(out[0]!.kind).toBe('file');
  });
});

describe('isCollectionItem', () => {
  it('accepts .json and .md items', () => {
    expect(isCollectionItem('a.json')).toBe(true);
    expect(isCollectionItem('a.md')).toBe(true);
  });

  it('rejects dotfiles, README.md, and other extensions', () => {
    expect(isCollectionItem('.keep')).toBe(false);
    expect(isCollectionItem('README.md')).toBe(false);
    expect(isCollectionItem('cover.png')).toBe(false);
  });
});

describe('reserved roots (D9)', () => {
  it('rejects a content file that shadows a namespace export', () => {
    expect(() => assertSafeExportName('data', 'data.json')).toThrow(/reserved/);
    expect(() => assertSafeExportName('pages', 'pages.json')).toThrow(/reserved/);
    expect(() => assertSafeExportName('site', 'site.json')).toThrow(/reserved/);
  });

  it('still rejects JS reserved words and non-identifiers', () => {
    expect(() => assertSafeExportName('class', 'class.json')).toThrow();
    expect(() => assertSafeExportName('blog-posts', 'blog-posts.json')).toThrow();
  });

  it('never aliases a reserved root even if it is unique', () => {
    const names = aliasableNames([entry({
      canonicalKey: 'pages.data', bareName: 'data', relPath: 'pages/data.json',
    })]);
    expect(names.has('data')).toBe(false);
  });
});

describe('findFatalDuplicates', () => {
  it('flags a file and a directory claiming one key inside data/', () => {
    const pairs = findFatalDuplicates([
      entry({ canonicalKey: 'data.blog', subdir: 'data', relPath: 'data/blog.json' }),
      entry({ canonicalKey: 'data.blog', subdir: 'data', relPath: 'data/blog', kind: 'collection' }),
    ]);
    expect(pairs).toHaveLength(1);
  });

  it('does not flag the same name across pages/ and data/', () => {
    expect(findFatalDuplicates([entry({}), entry({
      canonicalKey: 'data.blog', subdir: 'data', relPath: 'data/blog', kind: 'collection',
    })])).toEqual([]);
  });
});
