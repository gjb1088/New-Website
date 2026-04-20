'use client';

import { useState, useEffect } from 'react';
import ConsultationModal from './ConsultationModal';

export default function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-consultation', handler);
    return () => window.removeEventListener('open-consultation', handler);
  }, []);

  return (
    <>
      {children}
      <ConsultationModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
