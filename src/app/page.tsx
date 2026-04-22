const navigationItems = [
  { href: "#about", label: "About" },
  { href: "#highlights", label: "Highlights" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

const teamStats = [
  { value: "24", label: "athletes in rotation" },
  { value: "09", label: "competition-ready stunt groups" },
  { value: "18", label: "game-day appearances last season" },
];

const highlightCards = [
  {
    eyebrow: "Competition Energy",
    title: "Precision counts, clean transitions, and crowd-first pacing.",
    copy:
      "Designed to feel sharp in a gym, loud in a stadium, and confident on camera.",
  },
  {
    eyebrow: "Visual Identity",
    title: "A dramatic look built for posters, social clips, and sponsor decks.",
    copy:
      "The palette, typography, and section rhythm are already set up as a real brand system.",
  },
  {
    eyebrow: "Fast To Launch",
    title: "Static-first architecture means no backend, no hosting cost, and no fragile admin panel.",
    copy:
      "This version is ready for free deployment and easy content swaps once you gather real photos.",
  },
];

const programMoments = [
  {
    title: "Tunnel Entrance",
    caption: "Replace this card with a full-width team photo from your strongest game-day entrance.",
    className:
      "md:col-span-2 bg-[linear-gradient(135deg,#0f1623_5%,#6d1021_55%,#d9a441_100%)]",
  },
  {
    title: "Flyer Focus",
    caption: "Great spot for a close-up portrait, athlete spotlight, or media-day shot.",
    className:
      "bg-[linear-gradient(180deg,#fff8f0_0%,#f1d09a_100%)] text-[#201815]",
  },
  {
    title: "Halftime Floor",
    caption: "Use for a wide routine photo, pep-rally crowd moment, or sponsor-ready still.",
    className:
      "bg-[radial-gradient(circle_at_top,#f5d7a5_0%,#b43b47_45%,#201815_100%)]",
  },
  {
    title: "Sideline Rhythm",
    caption: "Perfect for chants, megaphone moments, or crowd interaction highlights.",
    className:
      "bg-[linear-gradient(160deg,#2a3042_0%,#51607a_35%,#d9a441_100%)]",
  },
  {
    title: "Championship Mood",
    caption: "Swap in medals, banners, bus-travel shots, or a full team celebration frame.",
    className:
      "md:col-span-2 bg-[linear-gradient(135deg,#6d1021_0%,#b43b47_45%,#fff8f0_100%)] text-[#fff8f0] md:text-[#201815]",
  },
];

const teamUnits = [
  {
    name: "Game-Day Unit",
    detail: "Fast chants, crowd cues, tunnel energy, and momentum-building sideline presence.",
  },
  {
    name: "Competition Line",
    detail: "Structured transitions, sharper formations, and a routine built around timing discipline.",
  },
  {
    name: "Community Crew",
    detail: "Appearances for school events, showcases, promo videos, and sponsor activations.",
  },
];

const sampleSchedule = [
  {
    date: "Sep 06",
    title: "Home Opener Reveal",
    note: "Stadium tunnel entrance and first-quarter chant block.",
  },
  {
    date: "Oct 11",
    title: "Autumn Showcase",
    note: "Feature routine for families, alumni, and prospective athletes.",
  },
  {
    date: "Nov 22",
    title: "Regional Weekend",
    note: "Competition-ready performance package and social content capture.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(217,164,65,0.34),transparent_38%),radial-gradient(circle_at_top_right,rgba(109,16,33,0.22),transparent_32%)]" />

      <header className="sticky top-0 z-30 border-b border-[#6d1021]/10 bg-[#fff8f0]/84 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start justify-between gap-4 lg:min-w-0 lg:flex-1 lg:items-center">
            <a href="#top" className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#6d1021]/20 bg-[#6d1021] text-xs font-semibold tracking-[0.18em] text-[#fff8f0] sm:h-11 sm:w-11 sm:text-sm sm:tracking-[0.24em]">
                KOT
              </span>
              <div className="min-w-0">
                <p className="max-w-[12rem] font-display text-[1.4rem] uppercase leading-[0.9] tracking-[0.12em] text-[#6d1021] sm:max-w-none sm:text-2xl sm:tracking-[0.18em]">
                  Knights of Transylvania
                </p>
                <p className="hidden text-[0.68rem] uppercase tracking-[0.22em] text-[#7b6759] sm:block sm:text-xs sm:tracking-[0.3em]">
                  Cheer Program Presentation
                </p>
              </div>
            </a>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#6d1021]/15 bg-[#201815] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#fff8f0] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6d1021] sm:hidden"
            >
              Launch Plan
            </a>
          </div>

          <nav className="-mx-1 flex items-center gap-2 overflow-x-auto px-1 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4f4038] lg:mx-0 lg:flex-1 lg:justify-center lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0 lg:text-sm lg:tracking-[0.22em] no-scrollbar">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-[#6d1021]/10 bg-[#fff8f0]/72 px-3 py-2 whitespace-nowrap transition-transform duration-200 hover:-translate-y-0.5 hover:text-[#6d1021] lg:border-transparent lg:bg-transparent lg:px-0 lg:py-0"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center justify-center rounded-full border border-[#6d1021]/15 bg-[#201815] px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#fff8f0] transition duration-300 hover:-translate-y-0.5 hover:bg-[#6d1021] sm:inline-flex"
          >
            Plan The Launch
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-18 pt-10 md:px-10 md:pb-28 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
          <div className="relative z-10">
            <p className="mb-6 inline-flex rounded-full border border-[#6d1021]/10 bg-[#fff8f0]/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6d1021] shadow-[0_12px_35px_rgba(32,24,21,0.08)] sm:text-xs sm:tracking-[0.28em]">
              Static-first site. Free hosting ready.
            </p>
            <h1 className="max-w-4xl font-display text-[3.35rem] uppercase leading-[0.88] tracking-[0.04em] text-[#201815] sm:text-6xl sm:tracking-[0.06em] md:text-7xl md:tracking-[0.08em] lg:text-[7.5rem]">
              Built To Hit Hard On Game Day And Look Even Better Online.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#4f4038] sm:text-lg sm:leading-8 md:text-xl">
              This concept gives your cheer team a strong public-facing home: bold branding,
              room for photos, clear contact paths, and a premium feel without paying for a
              backend or complicated hosting.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full bg-[#6d1021] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#fff8f0] shadow-[0_20px_40px_rgba(109,16,33,0.24)] transition duration-300 hover:-translate-y-1 hover:bg-[#8b1a30] sm:tracking-[0.24em]"
              >
                Explore The Look
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#201815]/15 bg-[#fff8f0]/70 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#201815] transition duration-300 hover:-translate-y-1 hover:border-[#6d1021]/30 sm:tracking-[0.24em]"
              >
                Replace With Team Info
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {teamStats.map((stat) => (
                <div key={stat.label} className="panel rounded-[1.5rem] px-5 py-6">
                  <p className="font-display text-4xl uppercase tracking-[0.14em] text-[#6d1021]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#6d1021]/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-6">
            <div className="absolute -left-8 top-10 h-44 w-44 rounded-full bg-[#d9a441]/30 blur-3xl animate-float" />
            <div className="absolute -right-8 bottom-0 h-52 w-52 rounded-full bg-[#6d1021]/22 blur-3xl animate-float-delayed" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-[linear-gradient(160deg,#0f1623_0%,#35263a_45%,#6d1021_100%)] p-6 text-[#fff8f0] shadow-[0_34px_90px_rgba(32,24,21,0.22)] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,215,165,0.35),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_22%)]" />
              <div className="relative">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#f5d7a5]">
                      Program Snapshot
                    </p>
                    <h2 className="mt-3 font-display text-3xl uppercase tracking-[0.08em] sm:text-4xl sm:tracking-[0.12em]">
                      Performance Ready
                    </h2>
                  </div>
                  <span className="w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-[#f5d7a5] sm:text-xs sm:tracking-[0.24em]">
                    2026 Draft
                  </span>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.26em] text-[#f5d7a5]">Tone</p>
                    <p className="mt-3 text-lg leading-7 text-white/88">
                      Dramatic, athletic, polished, and sponsor-friendly.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.26em] text-[#f5d7a5]">Hosting</p>
                    <p className="mt-3 text-lg leading-7 text-white/88">
                      Free on Vercel Hobby with no server maintenance.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/8 p-5 backdrop-blur-sm">
                  <div className="flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs uppercase tracking-[0.26em] text-[#f5d7a5]">Sample Calendar</p>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/60">Swap with real dates</p>
                  </div>

                  <div className="mt-4 space-y-4">
                    {sampleSchedule.map((event) => (
                      <div key={event.title} className="grid gap-2 rounded-[1.25rem] bg-[#fff8f0]/8 px-4 py-4 sm:grid-cols-[5.2rem_1fr] sm:gap-4">
                        <div>
                          <p className="font-display text-3xl uppercase tracking-[0.08em] text-[#f5d7a5]">
                            {event.date}
                          </p>
                        </div>
                        <div>
                          <p className="text-base font-semibold uppercase tracking-[0.16em] text-[#fff8f0]">
                            {event.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-white/72">{event.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-8 md:px-10 md:py-12">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="panel rounded-[2rem] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d1021]">
                Why This Setup Works
              </p>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[0.94] tracking-[0.05em] text-[#201815] sm:text-5xl sm:tracking-[0.08em] md:text-6xl">
                A polished team site without paying for a backend.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {highlightCards.map((card) => (
                <article key={card.title} className="panel rounded-[2rem] p-6 md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#6d1021]">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold leading-8 text-[#201815]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#5b4a41]">{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="highlights" className="mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="rounded-[2rem] bg-[#201815] p-8 text-[#fff8f0] shadow-[0_28px_70px_rgba(32,24,21,0.24)] md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f5d7a5]">
                Program Architecture
              </p>
              <h2 className="mt-5 font-display text-4xl uppercase leading-[0.94] tracking-[0.05em] sm:text-5xl sm:tracking-[0.08em] md:text-6xl">
                Built for hype, clarity, and easy updates.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/76">
                You can keep this entire site static until you actually need forms, private athlete
                data, or a custom content system. That keeps the launch simple and the monthly cost
                at zero.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {teamUnits.map((unit) => (
                <article key={unit.name} className="panel rounded-[2rem] p-6">
                  <p className="font-display text-3xl uppercase tracking-[0.1em] text-[#6d1021]">
                    {unit.name}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#5b4a41]">{unit.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-4 py-8 md:px-10 md:py-12">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d1021]">
                Visual Direction
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.94] tracking-[0.05em] text-[#201815] sm:text-5xl sm:tracking-[0.08em] md:text-6xl">
                Photo slots that already feel like a campaign.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#5b4a41]">
              These are styled placeholders so the site feels finished before your real media is
              dropped in. Replace each block with team photos, videos, or sponsor assets when ready.
            </p>
          </div>

          <div className="grid auto-rows-[15rem] gap-5 md:grid-cols-3">
            {programMoments.map((moment) => (
              <article
                key={moment.title}
                className={`${moment.className} group relative overflow-hidden rounded-[2rem] p-6 text-[#fff8f0] shadow-[0_22px_60px_rgba(32,24,21,0.16)] transition duration-300 hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,22,35,0.16))] opacity-70 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-white/30" />
                <div className="relative flex h-full flex-col justify-end">
                  <p className="font-display text-3xl uppercase tracking-[0.1em]">{moment.title}</p>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-current/85">{moment.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-24">
          <div className="relative overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,#fff8f0_0%,#f1dfbf_38%,#d9a441_100%)] px-6 py-10 shadow-[0_34px_90px_rgba(32,24,21,0.16)] md:px-12 md:py-14">
            <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#6d1021]/14 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-white/30 blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6d1021]">
                  Ready For Real Content
                </p>
                <h2 className="mt-5 max-w-4xl font-display text-4xl uppercase leading-[0.92] tracking-[0.05em] text-[#201815] sm:text-5xl sm:tracking-[0.08em] md:text-7xl">
                  Replace the placeholders, deploy for free, and publish.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[#4f4038] sm:text-lg sm:leading-8">
                  The only missing pieces now are your actual team photos, real contact details, and
                  any sponsor copy you want featured. Everything else is already structured for a
                  clean launch.
                </p>
              </div>

              <div className="grid gap-4 rounded-[2rem] bg-[#201815] p-6 text-[#fff8f0] shadow-[0_24px_70px_rgba(32,24,21,0.24)]">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-[#f5d7a5]">Replace Before Launch</p>
                  <div className="mt-3 space-y-2 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                    <p className="break-all">Email: team@knightsoftransylvania.com</p>
                    <p className="break-all">Instagram: @knightsoftransylvania</p>
                    <p>Booking CTA: Tryouts, events, or sponsor requests</p>
                  </div>
                </div>
                <a
                  href="mailto:team@knightsoftransylvania.com"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[#fff8f0] px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#201815] transition duration-300 hover:-translate-y-0.5 sm:tracking-[0.24em]"
                >
                  Placeholder Contact Link
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
