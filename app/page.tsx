import Link from "next/link";

const technologies = [
  { name: "HTML", blurb: "Estructura los mundos que vas a explorar.", color: "#ff7a45" },
  { name: "CSS", blurb: "Dale estilo a cada escenario que construyas.", color: "#5eead4" },
  { name: "JavaScript", blurb: "Pon en movimiento la lógica del juego.", color: "#ffd166" },
  { name: "Python", blurb: "Automatiza retos y resuelve acertijos.", color: "#7dd3fc" },
];

const pillars = [
  {
    title: "Juega",
    description: "Convierte la curiosidad en misiones, mundos y progreso visible.",
  },
  {
    title: "Aprende",
    description: "Resuelve desafíos para comprender los fundamentos de la programación.",
  },
  {
    title: "Avanza",
    description: "Sigue tus logros y presume tu lugar en la comunidad.",
  },
];

// Placeholders de "mundos" mientras no hay capturas reales del juego.
// Reemplaza `art` por <img src="/capturas/mundo-html.png" ... /> cuando
// tengas las imágenes definitivas; la forma de la tarjeta ya está lista.
const worlds = [
  { title: "Mundo HTML", subtitle: "Cimientos de la ciudad", color: "#ff7a45" },
  { title: "Mundo CSS", subtitle: "El taller de estilos", color: "#5eead4" },
  { title: "Mundo JavaScript", subtitle: "La sala de máquinas", color: "#ffd166" },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[var(--oc-background)] text-[var(--oc-text)]">
      {/* ---------- NAV ---------- */}
      <header className="border-b border-[var(--oc-border)]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <p className="font-[family-name:var(--font-pixel)] text-[11px] tracking-[0.18em] text-[var(--oc-accent)] sm:text-xs">
            OVER_CODE
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              className="rounded-lg px-3 py-2 text-sm font-semibold text-[var(--oc-text)] transition hover:bg-[var(--oc-surface)] sm:px-4"
              href="/login"
            >
              Iniciar sesión
            </Link>
            <Link
              className="rounded-lg bg-[var(--oc-primary)] px-3 py-2 text-sm font-bold text-[var(--oc-primary-text)] transition hover:bg-[var(--oc-primary-hover)] sm:px-4"
              href="/register"
            >
              Crear cuenta
            </Link>
          </div>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section className="relative isolate border-b border-[var(--oc-border)]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(94,234,212,0.16),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,122,69,0.14),transparent_40%)]" />

        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
          <div>
            <p className="font-[family-name:var(--font-pixel)] text-[10px] tracking-[0.16em] text-[var(--oc-accent-2)]">
              APRENDE JUGANDO
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Tu próxima habilidad empieza con una misión.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--oc-muted)]">
              OVER CODE convierte los desafíos de programación en una aventura:
              explora, resuelve problemas y desbloquea tu potencial mientras
              juegas.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                className="rounded-xl bg-[var(--oc-primary)] px-5 py-3 text-sm font-bold text-[var(--oc-primary-text)] transition hover:scale-[1.02] hover:bg-[var(--oc-primary-hover)]"
                href="/login"
              >
                Iniciar sesión
              </Link>
              <Link
                className="rounded-xl border border-[var(--oc-border)] bg-[var(--oc-surface)] px-5 py-3 text-sm font-bold transition hover:bg-[var(--oc-surface-raised)]"
                href="/register"
              >
                Crear cuenta
              </Link>
              <Link
                className="rounded-xl border border-[var(--oc-accent)]/50 px-5 py-3 text-sm font-bold text-[var(--oc-accent)] transition hover:bg-[var(--oc-accent)]/10"
                href="/download"
              >
                Descargar juego
              </Link>
            </div>
          </div>

          {/* Elemento firma: un "terminal" de misión en vez de un
              recuadro vacío. Sustituye bien la falta de capturas reales
              y refuerza la idea de "código como aventura". */}
          <div className="relative mx-auto w-full max-w-md rounded-2xl border border-[var(--oc-border)] bg-[#0d1424] shadow-2xl">
            <div className="flex items-center gap-1.5 rounded-t-2xl border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff7a45]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5eead4]" />
              <span className="ml-3 font-[family-name:var(--font-geist-mono)] text-xs text-white/40">
                mundo_01.js
              </span>
            </div>

            <div className="space-y-2 px-5 py-6 font-[family-name:var(--font-geist-mono)] text-[13px] leading-relaxed">
              <p><span className="text-[#ff7a45]">function</span> <span className="text-[#5eead4]">iniciarMision</span>() {"{"}</p>
              <p className="pl-4 text-white/70">const jugador = crearHeroe();</p>
              <p className="pl-4 text-white/70">jugador.entrarA(<span className="text-[#ffd166]">&quot;Mundo HTML&quot;</span>);</p>
              <p className="pl-4">
                <span className="text-[#5eead4]">return</span>{" "}
                <span className="text-white/70">jugador.progreso;</span>
              </p>
              <p>{"}"}</p>
            </div>

            <div className="mx-5 mb-5 rounded-xl border border-[var(--oc-accent)]/25 bg-[var(--oc-accent)]/10 p-4">
              <p className="font-[family-name:var(--font-pixel)] text-[9px] tracking-[0.14em] text-[var(--oc-accent)]">
                MISIÓN ACTIVA
              </p>
              <p className="mt-2 text-sm font-bold text-white">
                Desbloquea tu primer mundo de código.
              </p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/30">
                <div className="h-full w-2/3 rounded-full bg-[var(--oc-accent-2)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- QUÉ ES ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="max-w-2xl">
          <p className="font-[family-name:var(--font-pixel)] text-[10px] tracking-[0.16em] text-[var(--oc-accent-2)]">
            LA AVENTURA
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
            ¿Qué es OVER CODE?
          </h2>
          <p className="mt-5 leading-8 text-[var(--oc-muted)]">
            Es una plataforma que acompaña un videojuego educativo de
            programación. Cada reto está diseñado para ayudarte a pensar como
            desarrollador mientras progresas dentro de un universo hecho para
            aprender.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-[var(--oc-border)] bg-[var(--oc-surface)] p-6 transition hover:-translate-y-0.5 hover:border-[var(--oc-accent)]/40"
            >
              <h3 className="text-xl font-bold">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--oc-muted)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- TECNOLOGÍAS ---------- */}
      <section className="border-y border-[var(--oc-border)] bg-[var(--oc-surface)]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <p className="font-[family-name:var(--font-pixel)] text-[10px] tracking-[0.16em] text-[var(--oc-accent-2)]">
            TU INVENTARIO DE HABILIDADES
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
            Tecnologías que aprenderás
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((technology) => (
              <div
                key={technology.name}
                className="rounded-2xl border border-[var(--oc-border)] bg-[var(--oc-surface-raised)] p-6"
              >
                <span
                  className="mb-4 inline-block h-9 w-9 rounded-lg"
                  style={{ backgroundColor: technology.color }}
                  aria-hidden="true"
                />
                <p className="text-xl font-black">{technology.name}</p>
                <p className="mt-2 text-sm text-[var(--oc-muted)]">
                  {technology.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CAPTURAS / MUNDOS ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="font-[family-name:var(--font-pixel)] text-[10px] tracking-[0.16em] text-[var(--oc-accent-2)]">
          DENTRO DEL JUEGO
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
          Explora los mundos
        </h2>
        <p className="mt-3 max-w-xl text-sm text-[var(--oc-muted)]">
          Estas tarjetas son marcadores visuales: cámbialas por tus capturas
          reales del juego cuando las tengas listas.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {worlds.map((world) => (
            <div
              key={world.title}
              className="relative flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl border border-[var(--oc-border)] p-5"
              style={{
                background: `linear-gradient(160deg, ${world.color}26, var(--oc-surface) 65%)`,
              }}
            >
              <div
                className="absolute right-5 top-5 h-14 w-14 rounded-lg opacity-80"
                style={{ backgroundColor: world.color }}
                aria-hidden="true"
              />
              <p className="font-[family-name:var(--font-pixel)] text-[9px] tracking-[0.14em] text-[var(--oc-muted)]">
                {world.subtitle}
              </p>
              <p className="mt-2 text-lg font-bold">{world.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t border-[var(--oc-border)] bg-[var(--oc-surface)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[var(--oc-muted)] md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-[family-name:var(--font-pixel)] text-[10px] tracking-[0.14em] text-[var(--oc-accent)]">
            OVER_CODE
          </p>
          <p>Aprende programación. Juega tu próxima misión.</p>
          <div className="flex gap-4">
            <Link className="hover:text-[var(--oc-text)]" href="/login">
              Acceder
            </Link>
            <Link className="hover:text-[var(--oc-text)]" href="/download">
              Descargar
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
