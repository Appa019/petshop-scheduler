import ScrollReveal from '../components/ScrollReveal'

const priorities = [
  { term: 'Urgente', detail: 'o que precisa acontecer logo' },
  { term: 'Importante', detail: 'a rotina preventiva: vermífugo, check-up, dentes' },
  { term: 'Eletivo', detail: 'o que é opcional ou de bem-estar' },
]

export default function Schedule() {
  return (
    <section id="cronograma" className="mt-32 scroll-mt-8 lg:mt-48">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12">
        <ScrollReveal className="order-2 lg:order-1 lg:col-span-5">
          <img
            src="/screens/cronograma.webp"
            alt="Tela de cronograma criado: vacina V10 em 15 dias, vermifugação em 30 dias e check-up com hemograma em 45 dias"
            width={800}
            height={1720}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover object-[50%_25%]"
          />
        </ScrollReveal>
        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <ScrollReveal>
            <h2 className="text-[clamp(36px,5vw,72px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
              Cinco anos marcados
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="mt-8 max-w-[52ch] text-[18px] leading-[1.55]">
              Com a raça confirmada, a IA monta de 25 a 35 consultas e exames: vacinas, vermífugo, dentes, higiene e os
              exames que fazem sentido para aquela raça. Cada item traz o motivo e entra na sua agenda.
            </p>
          </ScrollReveal>
          <dl className="mt-12 flex flex-col gap-6">
            {priorities.map((p, i) => (
              <ScrollReveal key={p.term} delay={0.12 + i * 0.07}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                  <dt className="text-[22px] font-semibold sm:w-[8.5rem] sm:shrink-0">{p.term}</dt>
                  <dd className="text-[16px] leading-[1.5] text-[var(--muted)]">{p.detail}</dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>
          <ScrollReveal delay={0.35}>
            <p className="mt-12 max-w-[52ch] text-[18px] leading-[1.55]">
              Na véspera de cada consulta, o app manda um lembrete para o seu e-mail.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
