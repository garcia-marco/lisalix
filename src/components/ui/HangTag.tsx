import { cn } from '@/lib/cn'

/**
 * Clothing hang tag: notched card with an eyelet and a loose string. Pop-in
 * animations go on `className` (outer element) and sway on `swayClassName`
 * (inner one), so the two `scale`/`rotate` animations don't override each other.
 */
export function HangTag({
  kicker,
  label,
  className,
  swayClassName,
  wrap = false,
}: {
  kicker: string
  label: string
  className?: string
  swayClassName?: string
  /** Let the label wrap; the outer element then needs a max width. */
  wrap?: boolean
}) {
  return (
    <div className={cn('absolute', className)}>
      <div
        className={cn(
          'relative origin-[12px_50%] -rotate-3 drop-shadow-[0_8px_12px_rgba(15,50,80,0.25)]',
          swayClassName
        )}
      >
        <svg
          viewBox="0 0 40 48"
          className="absolute bottom-1/2 left-[12px] h-12 w-10 overflow-visible text-brand-dark/60"
          aria-hidden="true"
        >
          <path
            d="M0 48 C -6 34 -18 24 -12 12 C -8 4 2 2 6 -4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
        <p
          className={cn(
            'bg-white py-1.5 pr-4 pl-8 text-brand [clip-path:polygon(18px_0,100%_0,100%_100%,18px_100%,0_50%)] sm:py-2',
            wrap ? 'text-balance' : 'whitespace-nowrap'
          )}
        >
          <span className="block text-[10px] font-semibold tracking-[0.2em] text-brand/60 uppercase">
            {kicker}
          </span>
          <span className="block font-heading text-base leading-tight italic sm:text-lg">
            {label}
          </span>
        </p>
        <span
          className="absolute top-1/2 left-[8px] size-2.5 -translate-y-1/2 rounded-full bg-brand-light ring-2 ring-brand/30"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
