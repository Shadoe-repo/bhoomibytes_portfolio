import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

interface PitchInquiryFormProps {
  /** Success state content rendered inline from the page */
  successContent?: React.ReactNode;
  /** <option> elements rendered inline from the page for the inquiry type select */
  inquiryOptions?: React.ReactNode;
}

export default function PitchInquiryForm({ successContent, inquiryOptions }: PitchInquiryFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('_gotcha')) return;

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const organization = String(formData.get('organization') ?? '').trim();
    const inquiryType = String(formData.get('inquiryType') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    setStatus('sending');
    setErrorMsg('');

    try {
      // Field mapping: only the message textarea goes in messages_attributes[0].body.
      // All other fields (dropdowns, radios, checkboxes) must be added to conversation.data as { "Label": value } pairs.
      const res = await fetch('/api/contact/pitch-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{ body: message || 'New pitch inquiry submission' }],
            data: {
              __gd_contact_form_title: 'Bhoomi Bytes Pitch Inquiry',
              'Inquiry Type': inquiryType,
              'Organization': organization || 'Not provided',
            },
          },
          user: { email, name },
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setShowSuccess(true);
        form.reset();
      } else {
        throw new Error(json.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' as const }}
        className="flex flex-col items-center justify-center py-16 text-center gap-4"
        role="status"
      >
        <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        {/* Success copy rendered by parent via successContent */}
        {successContent}
        <button
          onClick={() => { setShowSuccess(false); setStatus('idle'); }}
          className="glass-pill px-5 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 mt-2"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        style={{ position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
      />

      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 text-sm text-white placeholder-white/25 rounded-xl bg-white/5 border border-white/15 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 text-sm text-white placeholder-white/25 rounded-xl bg-white/5 border border-white/15 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200"
          />
        </div>
      </div>

      {/* Organization */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-org" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
          Organization / Institution
        </label>
        <input
          id="contact-org"
          name="organization"
          type="text"
          placeholder="Company, university, or cooperative name"
          className="w-full px-4 py-3 text-sm text-white placeholder-white/25 rounded-xl bg-white/5 border border-white/15 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200"
        />
      </div>

      {/* Inquiry type */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-inquiry" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
          Inquiry Type <span className="text-primary">*</span>
        </label>
        <select
          id="contact-inquiry"
          name="inquiryType"
          required
          defaultValue=""
          className="w-full px-4 py-3 text-sm text-white rounded-xl bg-background/80 border border-white/15 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200 cursor-pointer"
        >
          <option value="" disabled className="text-white/40">Select inquiry type…</option>
          {inquiryOptions}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-xs font-semibold text-white/60 uppercase tracking-wider">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your interest in Bhoomi Bytes, your organization, and how you'd like to collaborate…"
          className="w-full px-4 py-3 text-sm text-white placeholder-white/25 rounded-xl bg-white/5 border border-white/15 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
        />
      </div>

      {/* Error */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3"
            role="alert"
          >
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <p className="text-sm text-red-300">{errorMsg}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        {status === 'sending' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending…</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
