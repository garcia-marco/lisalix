import Link from 'next/link'
import { Container, Icon } from '@/components/ui'
import { siteConfig } from '@/lib/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto pb-4">
      <Container>
        <div className="rounded-[27px] bg-brand-light px-6 py-10 text-center text-brand">
          {/* <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm">
            <Link href="/qui-sommes-nous" className="hover:text-brand-dark hover:underline">
              Qui sommes-nous
            </Link>
            <Link href="/mentions-legales" className="hover:text-brand-dark hover:underline">
              Mentions légales
            </Link>
          </div> */}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center gap-2 hover:text-brand-dark hover:underline"
            >
              <Icon
                name="call"
                size={16}
              />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 hover:text-brand-dark hover:underline"
            >
              <Icon
                name="email"
                size={16}
              />
              {siteConfig.email}
            </a>
          </div>

          <p className="mt-6 text-xs text-brand/60">
            Copyright © {year} {siteConfig.name}
          </p>
        </div>
      </Container>
    </footer>
  )
}
