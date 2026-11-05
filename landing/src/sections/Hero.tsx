import ScrollReveal from '../components/ScrollReveal'
import { APP_URL, REPO_URL } from './links'

// The four steps of the real sign-up flow, in the order the app shows them
const screens = [
  { file: 'cadastro', alt: 'Tela de cadastro do app com a foto do Caramelo, nome, idade, porte e peso preenchidos', caption: 'Você envia a foto, a idade, o porte e o peso.' },
  { file: 'raca', alt: 'Tela de confirmação de raça: SRD, mistura de Labrador, Pinscher e Beagle', caption: 'A IA responde com a raça ou a mistura provável.' },
  { file: 'saude', alt: 'Tela com as condições de saúde mais comuns para a mistura do Caramelo', caption: 'Você vê as doenças mais comuns para essa raça.' },
  { file: 'cronograma', alt: 'Tela do cronograma criado, com vacina V10, vermifugação e check-up', caption: 'O cronograma de cinco anos vai para a agenda.' },
]

export default function Hero() {
  return (
    <section id="top" className="pt-28 lg:pt-36">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <h1 className="text-[clamp(32px,9.4vw,40px)] sm:text-[clamp(40px,8.4vw,128px)] font-extrabold leading-[0.98] tracking-[-0.02em]">
          Da foto{' '}
          <span className="shutter my-4 block aspect-[3/2] w-full overflow-hidden sm:my-0 sm:inline-block sm:aspect-auto sm:h-[0.74em] sm:w-[3em] sm:align-baseline">
            <img
              src="/caramelo.webp"
              alt="Caramelo, um vira-lata cor de caramelo, deitado num tapete"
              width={800}
              height={480}
              className="h-full w-full object-cover object-[20%_40%]"
            />
          </span>
          <br className="hidden sm:inline" />
          {' '}ao plano de saúde
        </h1>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:items-end">
          <p className="max-w-[44ch] text-[20px] leading-[1.5] lg:col-span-7 lg:text-[22px]">
            O 8Patas identifica a raça do seu cão ou gato pela foto, mostra as doenças mais comuns nela e monta um
            cronograma de vacinas, exames e consultas para os próximos cinco anos.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:col-span-5 lg:justify-end">
            <a
              href={APP_URL}
              className="inline-flex min-h-[52px] items-center bg-[var(--accent)] px-7 text-[18px] font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] active:translate-y-px"
            >
              Cadastrar meu pet
            </a>
            <a href={REPO_URL} className="text-[18px] font-semibold text-[var(--accent)] underline underline-offset-4 hover:decoration-2">
              Ver o código no GitHub
            </a>
          </div>
        </div>

        <ol
          aria-label="O cadastro no app, passo a passo"
          className="mt-16 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:mt-24 lg:grid-cols-4"
        >
          {screens.map((s, i) => (
            <li key={s.file}>
              <ScrollReveal delay={i * 0.08}>
                <figure>
                  <img
                    src={`/screens/${s.file}.webp`}
                    alt={s.alt}
                    width={800}
                    height={1720}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    className="w-full"
                  />
                  <figcaption className="mt-4 text-[15px] leading-[1.45] sm:text-[16px]">{s.caption}</figcaption>
                </figure>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
