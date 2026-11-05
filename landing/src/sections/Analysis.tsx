import ScrollReveal from '../components/ScrollReveal'

// What the ai-analyze edge function returns for one photo
const outputs = [
  { term: 'Raça ou mistura', detail: 'De raça, vem o nome dela. Sem raça definida, vem a mistura provável, com até cinco raças em ordem de dominância.' },
  { term: 'Cuidados para a idade', detail: 'De 8 a 15 orientações de dieta, exercício e prevenção, pensadas para a fase de vida em que o pet está.' },
  { term: 'Condições a acompanhar', detail: 'De 6 a 10 doenças com predisposição na raça, cada uma explicada em uma ou duas frases.' },
  { term: 'Perfil de doenças', detail: 'Um texto corrido sobre as principais doenças genéticas da raça ou da mistura.' },
]

export default function Analysis() {
  return (
    <section id="raca" className="mt-32 scroll-mt-8 lg:mt-48">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:px-12">
        <div className="lg:col-span-6">
          <ScrollReveal>
            <h2 className="text-[clamp(36px,5vw,72px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
              Raça pura ou <span className="whitespace-nowrap">vira-lata</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <p className="mt-8 max-w-[52ch] text-[18px] leading-[1.55]">
              A foto vai para um modelo de visão junto com a idade, o porte e o peso que você informou. Se a resposta
              não bater, você corrige a raça à mão ou pede para a IA tentar de novo como mistura.
            </p>
          </ScrollReveal>
          <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {outputs.map((o, i) => (
              <ScrollReveal key={o.term} delay={0.12 + i * 0.07}>
                <dt className="text-[22px] font-semibold leading-[1.25]">{o.term}</dt>
                <dd className="mt-2 text-[16px] leading-[1.5] text-[var(--muted)]">{o.detail}</dd>
              </ScrollReveal>
            ))}
          </dl>
        </div>
        <ScrollReveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <img
            src="/screens/saude.webp"
            alt="Tela do app listando displasia coxofemoral, obesidade, otite externa e doença periodontal como condições a acompanhar"
            width={800}
            height={1720}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover object-[50%_30%]"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
