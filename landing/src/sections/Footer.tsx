import ScrollReveal from '../components/ScrollReveal'
import { APP_URL, REPO_URL } from './links'

export default function Footer() {
  return (
    <footer className="mt-32 pb-10 lg:mt-48">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <h2 className="text-[clamp(36px,5vw,72px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
              Teste com o seu pet
            </h2>
            <p className="mt-6 max-w-[44ch] text-[18px] leading-[1.55]">
              Crie uma conta, envie uma foto e veja o cronograma montado em seguida.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <a
              href={APP_URL}
              className="inline-flex min-h-[52px] items-center bg-[var(--accent)] px-7 text-[18px] font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] active:translate-y-px"
            >
              Abrir o app
            </a>
          </ScrollReveal>
        </div>

        <p aria-hidden="true" className="mt-24 select-none text-[clamp(88px,24vw,360px)] font-extrabold leading-[0.85] tracking-[-0.02em]">
          8Patas
        </p>

        <div className="mt-10 flex flex-col gap-3 text-[15px] leading-[1.5] text-[var(--muted)] lg:flex-row lg:justify-between lg:gap-10">
          <p>
            <a href={REPO_URL} className="text-[var(--ink)] underline underline-offset-4">Código no GitHub</a>
            {' · '}Projeto de intraempreendedorismo, FGV
          </p>
          <p className="lg:text-right">
            As telas mostram o app com um pet de exemplo. Foto: “Caramelo dog 59”, de Vitor Coelho Nisida,{' '}
            <a href="https://commons.wikimedia.org/wiki/File:Caramelo_dog_59.jpg" className="underline underline-offset-4">
              domínio público, via Wikimedia Commons
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
