import { Helmet } from '@dr.pogodin/react-helmet';

import GlassNav from '@/components/bhoomi/GlassNav';
import HeroSection from '@/components/bhoomi/HeroSection';
import ProblemSection from '@/components/bhoomi/ProblemSection';
import SolutionSection from '@/components/bhoomi/SolutionSection';
import HowItWorksSection from '@/components/bhoomi/HowItWorksSection';
import FeaturesSection from '@/components/bhoomi/FeaturesSection';
import TechnologySection from '@/components/bhoomi/TechnologySection';
import USPSection from '@/components/bhoomi/USPSection';
import MarketSection from '@/components/bhoomi/MarketSection';
import CompetitiveSection from '@/components/bhoomi/CompetitiveSection';
import BusinessModelSection from '@/components/bhoomi/BusinessModelSection';
import ImpactSection from '@/components/bhoomi/ImpactSection';
import AchievementSection from '@/components/bhoomi/AchievementSection';
import RoadmapSection from '@/components/bhoomi/RoadmapSection';
import VisionSection from '@/components/bhoomi/VisionSection';
import FinalSection from '@/components/bhoomi/FinalSection';

const site = 'https://bhoomi-bytes.com';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${site}/#website`,
      name: 'Bhoomi Bytes',
      url: `${site}/`,
    },
    {
      '@type': 'Organization',
      '@id': `${site}/#organization`,
      name: 'Bhoomi Bytes',
      url: `${site}/`,
      description:
        'An IoT and AI-powered smart agriculture platform that transforms real-time field data into intelligent farming decisions.',
    },
    {
      '@type': 'WebPage',
      '@id': `${site}/#webpage`,
      url: `${site}/`,
      name: 'Bhoomi Bytes — From Field Data to Smart Action',
      isPartOf: { '@id': `${site}/#website` },
      about: { '@id': `${site}/#organization` },
      datePublished: '2026-08-22',
      dateModified: '2026-08-22',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Bhoomi Bytes — From Field Data to Smart Action</title>
        <meta
          name="description"
          content="An IoT and AI-powered smart agriculture platform that transforms real-time field data into intelligent farming decisions. Finalist at BhabnaJU 1.0, IIC Jadavpur University."
        />
        <link rel="canonical" href={`${site}/`} />
        <meta property="og:title" content="Bhoomi Bytes — From Field Data to Smart Action" />
        <meta
          property="og:description"
          content="IoT monitoring, weather intelligence, AI-powered recommendations and remote farm control in one platform."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site}/`} />
        <meta property="og:image" content={`${site}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bhoomi Bytes — From Field Data to Smart Action" />
        <meta
          name="twitter:description"
          content="IoT monitoring, weather intelligence, AI-powered recommendations and remote farm control in one platform."
        />
        <meta name="twitter:image" content={`${site}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main>
        {/* Visually hidden h1 for SEO — visible h1 is rendered inside HeroSection */}
        <h1 className="sr-only">Bhoomi Bytes — From Field Data to Smart Action</h1>

        {/* Floating glass navigation */}
        <GlassNav />

        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Problem */}
        <ProblemSection />

        {/* 3. Solution */}
        <SolutionSection />

        {/* 4. How It Works */}
        <HowItWorksSection />

        {/* 5. Key Features */}
        <FeaturesSection />

        {/* 6. Technology */}
        <TechnologySection />

        {/* 7. USP */}
        <USPSection />

        {/* 8. Target Market */}
        <MarketSection />

        {/* 9. Competitive Landscape */}
        <CompetitiveSection />

        {/* 10. Business Model */}
        <BusinessModelSection />

        {/* 11. Impact */}
        <ImpactSection />

        {/* 12. Achievement */}
        <AchievementSection />

        {/* 13. Future Roadmap */}
        <RoadmapSection />

        {/* 14. Vision */}
        <VisionSection />

        {/* 15. Final Closing */}
        <FinalSection />
      </main>
    </>
  );
}
