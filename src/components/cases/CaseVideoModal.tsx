import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { caseVideoSources } from "@/content/de";
import type { CaseStudy } from "@/content/types";
import { cn } from "@/lib/cn";

type Props = {
  caseStudy: CaseStudy | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function CaseVideoModal({ caseStudy, open, onOpenChange }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [open]);

  if (!caseStudy) {
    return null;
  }

  const sources = caseVideoSources(caseStudy);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            className="fixed inset-0 z-50 bg-black/85"
            initial={{ opacity: 0 }}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </Dialog.Overlay>
        <Dialog.Content
          className={cn(
            "fixed inset-0 z-[60] flex items-center justify-center border-0 bg-transparent p-3 shadow-none outline-none focus:outline-none sm:p-6",
          )}
          aria-describedby={undefined}
        >
          <motion.div
            className={cn(
              "flex max-h-[min(92dvh,920px)] w-full max-w-[1120px] flex-col overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/15",
            )}
            initial={{ opacity: 0, scale: 0.82 }}
            animate={{
              opacity: open ? 1 : 0,
              scale: open ? 1 : 0.9,
            }}
            transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.65 }}
          >
            <div className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 px-4 py-3 text-white sm:px-5">
              <Dialog.Title className="text-sm font-semibold sm:text-base">
                {caseStudy.indexLabel}
              </Dialog.Title>
              <Dialog.Close
                type="button"
                className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4"
                aria-label="Schließen"
              >
                <span className="text-lg leading-none" aria-hidden>
                  ×
                </span>
                <span className="hidden sm:inline">Schließen</span>
              </Dialog.Close>
            </div>
            <Dialog.Description className="sr-only">
              Vollbild-Video zum Case {caseStudy.indexLabel}
            </Dialog.Description>
            <div className="relative min-h-0 flex-1 bg-black">
              <video
                ref={videoRef}
                key={caseStudy.id}
                className="h-full max-h-[min(80dvh,760px)] w-full object-contain sm:max-h-[min(78dvh,720px)]"
                controls
                playsInline
                autoPlay
              >
                {sources.map((s) => (
                  <source key={s.src} src={s.src} type={s.type} />
                ))}
              </video>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
