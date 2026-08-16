import { X } from "lucide-react";
import { useState } from "react";
import { nav } from "../../data/content";

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative bg-brand-900 py-2 text-center text-xs text-white/90">
      <span className="inline-flex items-center gap-2">
        {nav.announcement.text}
        <a href="#" className="underline underline-offset-2 hover:text-white">
          {nav.announcement.ctaLabel}
        </a>
      </span>
      <button
        aria-label="Dismiss announcement"
        onClick={() => setOpen(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white sm:right-6"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
