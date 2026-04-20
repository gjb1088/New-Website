'use client';

import { useState, FormEvent } from 'react';
import DatePicker from 'react-datepicker';
import { X, Send, CheckCircle2, Loader2, CalendarDays } from 'lucide-react';

type Stage = 'form' | 'sending' | 'sent' | 'error';

const SERVICES = [
  'Infrastructure Management',
  'Cloud & Virtualization',
  'Automation & DevOps',
  'Monitoring & Analytics',
  'Cybersecurity',
  'AI-Ops',
  'Not Sure Yet',
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ConsultationModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', description: '' });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [stage, setStage] = useState<Stage>('form');
  const [errorMsg, setErrorMsg] = useState('');

  if (!open) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!selectedDate) {
      alert('Please select a preferred date and time.');
      return;
    }

    const timeString = selectedDate.toLocaleString(undefined, {
      month: 'long', day: 'numeric', year: 'numeric',
      hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short',
    });
    const timeISO = selectedDate.toISOString();

    setStage('sending');
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, time: timeString, timeISO }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStage('sent');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
      setStage('error');
    }
  }

  function handleReset() {
    setForm({ name: '', email: '', company: '', service: '', description: '' });
    setSelectedDate(null);
    setStage('form');
    setErrorMsg('');
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-cyan-400/25 bg-[#080d1c] shadow-[0_0_80px_rgba(34,211,238,0.12)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div>
            <h2 className="font-display text-xl font-bold text-white">Book a Consultation</h2>
            <p className="text-xs text-cyan-100/50 mt-0.5">We'll reach out within 2 business hours to confirm.</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-cyan-100/50 hover:text-white hover:border-white/25 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {stage === 'sent' && (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-emerald-400" />
              <h3 className="font-display text-xl font-semibold text-white">Request received.</h3>
              <p className="text-sm text-cyan-100/55 max-w-sm">
                Our team will reach out to confirm your consultation. We look forward to connecting.
              </p>
              <button
                onClick={() => { handleReset(); onClose(); }}
                className="mt-2 text-xs text-cyan-400/70 hover:text-cyan-300 underline underline-offset-2"
              >
                Close
              </button>
            </div>
          )}

          {stage === 'error' && (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="h-14 w-14 rounded-full bg-red-500/10 border border-red-400/30 flex items-center justify-center text-2xl">⚠</div>
              <h3 className="font-display text-lg font-semibold text-white">Something went wrong</h3>
              <p className="text-xs text-red-400/80 max-w-sm font-mono">{errorMsg}</p>
              <button
                onClick={handleReset}
                className="mt-2 text-xs text-cyan-400/70 hover:text-cyan-300 underline underline-offset-2"
              >
                Try again
              </button>
            </div>
          )}

          {stage === 'sending' && (
            <div className="flex flex-col items-center gap-3 py-14 text-cyan-100/60">
              <Loader2 className="h-8 w-8 text-cyan-400 animate-spin" />
              <p className="text-sm">Sending your request…</p>
            </div>
          )}

          {stage === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-cyan-300/60 uppercase mb-1.5">Full Name *</label>
                  <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Jane Smith"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-cyan-300/60 uppercase mb-1.5">Company</label>
                  <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Acme Corp"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-cyan-300/60 uppercase mb-1.5">Business Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wide text-cyan-300/60 uppercase mb-1.5">Service Interested In *</label>
                  <select name="service" required value={form.service} onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-[#0c1228] px-4 py-2.5 text-sm text-white focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors">
                    <option value="" disabled>Select one…</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              {/* Date & time picker */}
              <div className="rounded-xl border border-cyan-400/25 bg-cyan-400/5 p-4">
                <label className="flex items-center gap-2 text-xs font-semibold tracking-wide text-cyan-300/80 uppercase mb-3">
                  <CalendarDays className="h-4 w-4 text-cyan-400" />
                  Preferred Date & Time *
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date: Date | null) => setSelectedDate(date)}
                  showTimeSelect
                  timeFormat="hh:mm aa"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  placeholderText="Click to pick a date and time…"
                  minDate={new Date()}
                  className="w-full rounded-lg border border-cyan-400/30 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-cyan-400/60 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 transition-colors cursor-pointer"
                  wrapperClassName="w-full"
                  popperClassName="!z-[200]"
                  popperPlacement="bottom-start"
                  popperProps={{ strategy: 'fixed' }}
                />
                {selectedDate && (
                  <p className="mt-2 text-xs text-cyan-300/70 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
                    {selectedDate.toLocaleString(undefined, {
                      weekday: 'long', month: 'long', day: 'numeric',
                      year: 'numeric', hour: 'numeric', minute: '2-digit',
                      hour12: true, timeZoneName: 'short',
                    })}
                  </p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-semibold tracking-wide text-cyan-300/60 uppercase mb-1.5">Brief Description</label>
                <textarea name="description" rows={3} value={form.description} onChange={handleChange}
                  placeholder="Tell us about your current challenges and goals…"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-colors resize-none" />
              </div>

              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_50px_rgba(34,211,238,0.4)] hover:scale-[1.02] transition-all duration-300 mt-2">
                SEND REQUEST
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
