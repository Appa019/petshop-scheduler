import ScrollReveal from '../components/ScrollReveal'
import { REPO_URL } from './links'

const stack = [
  { term: 'App', detail: 'React 19, Vite e React Router, publicado na Vercel em /app' },
  { term: 'API', detail: 'Supabase Edge Functions em Deno e TypeScript' },
  { term: 'Dados', detail: 'Postgres com Row Level Security: cada tutor só lê os próprios pets' },
  { term: 'Login', detail: 'Supabase Auth com confirmação por e-mail' },
  { term: 'IA', detail: 'OpenAI Responses API, com visão para a foto e texto para o plano' },
  { term: 'Lembretes', detail: 'Função diária no pg_cron e envio por SMTP' },
]

interface StackProps {
  onOpenPresentation: () => void
}

export default function Stack({ onOpenPresentation }: StackProps) {
  return (
    <section id="como-foi-feito" className="mt-32 scroll-mt-8 lg:mt-48">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12">
        <div className="lg:col-span-5">
          <ScrollReveal>
            <h2 className="text-[clamp(36px,5vw,72px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
              Como foi feito
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="mt-8 max-w-[44ch] text-[18px] leading-[1.55]">
              Projeto de intraempreendedorismo feito em grupo na FGV. O código é aberto, e a apresentação conta o
              problema, o modelo de negócio e a validação.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={REPO_URL} className="text-[18px] font-semibold text-[var(--accent)] underline underline-offset-4 hover:decoration-2">
                Código no GitHub
              </a>
              <button
                type="button"
                onClick={onOpenPresentation}
                className="text-[18px] font-semibold text-[var(--accent)] underline underline-offset-4 hover:decoration-2"
              >
                Ver a apresentação
              </button>
            </div>
          </ScrollReveal>
        </div>
        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {stack.map((s, i) => (
            <ScrollReveal key={s.term} delay={0.1 + i * 0.06}>
              <dt className="text-[22px] font-semibold">{s.term}</dt>
              <dd className="mt-2 text-[16px] leading-[1.5] text-[var(--muted)]">{s.detail}</dd>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
