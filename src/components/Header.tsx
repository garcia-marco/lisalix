'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container, Icon } from '@/components/ui'
import { cn } from '@/lib/cn'
import { siteConfig } from '@/lib/site'

const barClass =
  'flex items-center justify-between rounded-[20px] border-2 border-[#d9e3ec] bg-white px-6 py-3.5 shadow-[0_0_20px_-15px_#1a5789]'
const pillLinkClass =
  'inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[15px] font-medium text-brand transition-colors duration-200 hover:bg-brand-light hover:shadow-[0_0_20px_-17px_#1a5789]'
const activePillClass = 'bg-brand-light shadow-[0_0_20px_-17px_#1a5789]'
const ctaLinkClass =
  'inline-flex items-center gap-1.5 rounded-[10px] bg-brand px-4 py-2.5 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-brand-dark'

const navLinks = [
  { href: '/services', label: 'Nos prestations' },
  { href: '/qui-sommes-nous', label: 'Qui sommes-nous' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50">
      <Container className="px-2.5">
        <div className={barClass}>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="shrink-0 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Image
                src="/images/logo.png"
                alt="Lisalix"
                width={132}
                height={32}
                priority
              />
            </Link>
            {/*
            <nav className="hidden items-center gap-1 sm:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    pillLinkClass,
                    pathname === link.href && activePillClass,
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav> */}
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href={`tel:${siteConfig.phone}`}
              className={pillLinkClass}
            >
              <Icon
                name="call"
                size={18}
              />
              {siteConfig.phoneDisplay}
            </Link>
            {/* <Link
              href="/contact"
              className={ctaLinkClass}
            >
              <Icon
                name="request_quote"
                size={18}
              />
              Contact & devis
            </Link> */}
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 sm:hidden"
          >
            <span
              className={cn(
                'h-0.5 w-6 bg-brand transition-transform duration-200',
                open && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'h-0.5 w-6 bg-brand transition-opacity duration-200',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'h-0.5 w-6 bg-brand transition-transform duration-200',
                open && '-translate-y-2 -rotate-45',
              )}
            />
          </button>
        </div>
      </Container>

      {open && (
        <Container className="px-2.5 mt-2 sm:hidden">
          <nav className="flex flex-col gap-1 rounded-[20px] border-2 border-[#d9e3ec] bg-white p-3 shadow-[0_0_20px_-15px_#1a5789]">
            {/* {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  pillLinkClass,
                  'justify-center',
                  pathname === link.href && activePillClass,
                )}
              >
                {link.label}
              </Link>
            ))} */}
            <Link
              href={`tel:${siteConfig.phone}`}
              onClick={() => setOpen(false)}
              className={cn(pillLinkClass, 'justify-center')}
            >
              <Icon
                name="call"
                size={18}
              />
              {siteConfig.phoneDisplay}
            </Link>
            {/* <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(ctaLinkClass, 'justify-center')}
            >
              <Icon
                name="request_quote"
                size={18}
              />
              Contact & devis
            </Link> */}
          </nav>
        </Container>
      )}
    </header>
  )
}
