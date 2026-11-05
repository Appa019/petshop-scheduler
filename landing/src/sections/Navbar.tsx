import { REPO_URL } from './links'

const links = [
  { label: 'Raça', href: '#raca' },
  { label: 'Cronograma', href: '#cronograma' },
  { label: 'Como foi feito', href: '#como-foi-feito' },
]

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <nav aria-label="Principal" className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <a href="#top" className="text-[22px] font-extrabold tracking-[-0.02em]">8Patas</a>
        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map(link => (
              <li key={link.href}>
                <a href={link.href} className="text-[15px] font-semibold text-[var(--ink)] underline-offset-4 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={REPO_URL}
            className="inline-flex min-h-[44px] items-center bg-[var(--accent)] px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] active:translate-y-px"
          >
            Código no GitHub
          </a>
        </div>
      </nav>
    </header>
  )
}
