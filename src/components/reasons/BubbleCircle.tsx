type Props = { number: 1 | 2 | 3 };

export function BubbleCircle({ number }: Props) {
  return (
    <div
      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-teal-mid text-3xl font-black text-white shadow-lg ring-4 ring-white/40 sm:h-24 sm:w-24 sm:text-4xl"
      aria-hidden
    >
      {number}
    </div>
  );
}
