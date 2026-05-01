import Image from "next/image";
import ContactForm from "./contact-form";

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
    copy: "Designed to feel sharp in a gym, loud in a stadium, and confident on camera.",
  },
  {
    eyebrow: "Visual Identity",
    title: "A dramatic look built for posters, social clips, and sponsor decks.",
    copy: "The palette, typography, and section rhythm are already set up as a real brand system.",
  },
  {
    eyebrow: "Fast To Launch",
    title: "Static-first architecture means no backend, no hosting cost.",
    copy: "Ready for free deployment and easy content swaps once you gather real photos.",
  },
];

const programMoments = [
  {
    title: "Tunnel Entrance",
    caption: "Replace with a full-width team photo from your strongest game-day entrance.",
    colSpan: "md:col-span-2",
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1400&h=480&fit=crop&auto=format&q=80",
    alt: "Sports arena crowd atmosphere",
  },
  {
    title: "Flyer Focus",
    caption: "Close-up portrait, athlete spotlight, or media-day shot.",
    colSpan: "",
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=700&h=480&fit=crop&auto=format&q=80",
    alt: "Athlete in action",
  },
  {
    title: "Halftime Floor",
    caption: "Wide routine photo, pep-rally moment, or sponsor-ready still.",
    colSpan: "",
    src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=700&h=480&fit=crop&auto=format&q=80",
    alt: "Performance stage lights",
  },
  {
    title: "Sideline Rhythm",
    caption: "Chants, megaphone moments, or crowd interaction highlights.",
    colSpan: "",
    src: "https://images.unsplash.com/photo-1546519638405-a9f3c93b5694?w=700&h=480&fit=crop&auto=format&q=80",
    alt: "Sports sideline crowd energy",
  },
  {
    title: "Championship Mood",
    caption: "Medals, banners, bus-travel shots, or a full team celebration.",
    colSpan: "md:col-span-2",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400&h=480&fit=crop&auto=format&q=80",
    alt: "Championship celebration on track",
  },
];

const teamUnits = [
  {
    roman: "I",
    name: "Game-Day Unit",
    detail:
      "Fast chants, crowd cues, tunnel energy, and momentum-building sideline presence.",
  },
  {
    roman: "II",
    name: "Competition Line",
    detail:
      "Structured transitions, sharper formations, and a routine built around timing discipline.",
  },
  {
    roman: "III",
    name: "Community Crew",
    detail:
      "Appearances for school events, showcases, promo videos, and sponsor activations.",
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
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_at_82%_0%,rgba(140,5,25,0.34),transparent_48%),radial-gradient(ellipse_at_12%_80%,rgba(90,0,12,0.18),transparent_42%)]" />

      {/* ── Header ── */}
      <header className="sticky top-0 z-30 border-b border-[rgba(212,168,67,0.1)] bg-[#09070a]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:px-10 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          {/* Logo + mobile CTA row */}
          <div className="flex items-center justify-between gap-4 lg:min-w-0 lg:flex-initial">
            <a href="#top" className="flex min-w-0 items-center gap-3">
              {/* Heraldic shield badge */}
              <div
                className="flex h-12 w-11 shrink-0 items-center justify-center bg-[#c41230] text-[0.58rem] font-display tracking-[0.18em] text-[#f2e8d9] shadow-[0_0_22px_rgba(196,18,48,0.55)]"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 72%, 50% 100%, 0 72%)" }}
              >
                KOT
              </div>
              <div className="min-w-0">
                <p className="font-display text-[1.05rem] uppercase leading-none tracking-[0.1em] text-[#f2e8d9] sm:text-xl sm:tracking-[0.12em]">
                  Knights of Transylvania
                </p>
                <p className="hidden text-[0.6rem] uppercase tracking-[0.3em] text-[#d4a843] sm:block">
                  Cheer Program &mdash; 2026
                </p>
              </div>
            </a>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center border border-[rgba(196,18,48,0.5)] bg-[rgba(196,18,48,0.1)] px-4 py-2 text-[0.6rem] font-display uppercase tracking-[0.2em] text-[#f2e8d9] transition duration-300 hover:bg-[#c41230] lg:hidden"
            >
              Get In Touch
            </a>
          </div>

          {/* Nav */}
          <nav className="-mx-1 flex items-center gap-1.5 overflow-x-auto px-1 pb-1 text-[0.65rem] uppercase tracking-[0.2em] text-[#786858] lg:mx-0 lg:flex-1 lg:justify-center lg:gap-8 lg:overflow-visible lg:px-0 lg:pb-0 lg:text-[0.7rem] lg:tracking-[0.24em] no-scrollbar">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap border border-[rgba(212,168,67,0.1)] bg-[rgba(18,6,12,0.8)] px-3 py-2 transition-colors duration-200 hover:border-[rgba(212,168,67,0.3)] hover:text-[#d4a843] lg:border-transparent lg:bg-transparent lg:px-0 lg:py-0"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden items-center justify-center border border-[rgba(196,18,48,0.5)] bg-[rgba(196,18,48,0.1)] px-5 py-2.5 text-[0.65rem] font-display uppercase tracking-[0.22em] text-[#f2e8d9] transition duration-300 hover:bg-[#c41230] hover:border-[#c41230] hover:shadow-[0_8px_24px_rgba(196,18,48,0.4)] lg:inline-flex"
          >
            Get In Touch
          </a>
        </div>
      </header>

      <main id="top">
        {/* ── Hero ── */}
        <section className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-14 md:px-10 md:pb-28 md:pt-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-14">
          <div className="relative z-10">
            <p className="mb-7 inline-flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.32em] text-[#d4a843]">
              <span className="inline-block h-px w-8 bg-[rgba(212,168,67,0.6)]" />
              Official Cheer Program &middot; 2026 Season
            </p>

            <h1 className="font-display uppercase leading-[0.83] tracking-[0.03em] text-[#f2e8d9]">
              <span className="block text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem]">
                Built
              </span>
              <span
                className="block text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem] text-[#c41230] hero-text-glow"
              >
                To Hit
              </span>
              <span className="block text-[4rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[8rem]">
                Hard.
              </span>
            </h1>

            <div className="gold-rule my-8 max-w-[280px]" />

            <p className="max-w-[52ch] text-lg leading-8 text-[#c8b8a8]">
              The Knights of Transylvania cheer program — bold branding,
              a full event calendar, and a team that shows up loud on game day
              and sharp on competition floor.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center bg-[#c41230] px-8 py-4 text-sm font-display uppercase tracking-[0.22em] text-[#f2e8d9] shadow-[0_16px_40px_rgba(196,18,48,0.42)] transition duration-300 hover:-translate-y-1 hover:bg-[#e01535] hover:shadow-[0_24px_54px_rgba(196,18,48,0.52)]"
              >
                Explore The Look
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-[rgba(212,168,67,0.25)] px-8 py-4 text-sm font-display uppercase tracking-[0.22em] text-[#f2e8d9] transition duration-300 hover:-translate-y-1 hover:border-[rgba(212,168,67,0.6)] hover:text-[#d4a843]"
              >
                Tryouts &amp; Enquiries
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-5 border-t border-[rgba(212,168,67,0.14)] pt-10">
              {teamStats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display text-[2.6rem] uppercase leading-none tracking-[0.06em] text-[#d4a843] gold-text-glow sm:text-[3.2rem]"
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[0.62rem] uppercase tracking-[0.22em] text-[#786858]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Program Snapshot card */}
          <div className="relative lg:mt-6">
            <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[rgba(196,18,48,0.14)] blur-3xl animate-float" />
            <div className="pointer-events-none absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-[rgba(212,168,67,0.07)] blur-3xl animate-float-delayed" />

            <div className="relative overflow-hidden border border-[rgba(196,18,48,0.3)] bg-[linear-gradient(160deg,#130308_0%,#260510_58%,#3e0515_100%)] p-7 shadow-[0_32px_85px_rgba(0,0,0,0.45),0_0_60px_rgba(196,18,48,0.07)] md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,168,67,0.07),transparent_52%)]" />
              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[#d4a843]">
                      Program Snapshot
                    </p>
                    <h2 className="mt-2.5 font-display text-2xl uppercase tracking-[0.07em] text-[#f2e8d9] sm:text-3xl">
                      Performance Ready
                    </h2>
                  </div>
                  <span className="shrink-0 border border-[rgba(196,18,48,0.4)] bg-[rgba(196,18,48,0.12)] px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-[#e08080]">
                    2026 Season
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="border border-[rgba(212,168,67,0.1)] bg-[rgba(255,255,255,0.02)] p-4">
                    <p className="text-[0.6rem] uppercase tracking-[0.28em] text-[#d4a843]">Tone</p>
                    <p className="mt-2 text-sm leading-6 text-[#c8b8a8]">
                      Dramatic, athletic, polished, and sponsor-friendly.
                    </p>
                  </div>
                  <div className="border border-[rgba(212,168,67,0.1)] bg-[rgba(255,255,255,0.02)] p-4">
                    <p className="text-[0.6rem] uppercase tracking-[0.28em] text-[#d4a843]">
                      Based In
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#c8b8a8]">
                      Transylvania University. Game days and beyond.
                    </p>
                  </div>
                </div>

                <div className="mt-4 border border-[rgba(212,168,67,0.1)] bg-[rgba(255,255,255,0.02)] p-5">
                  <div className="flex items-center justify-between border-b border-[rgba(212,168,67,0.1)] pb-3">
                    <p className="text-[0.6rem] uppercase tracking-[0.28em] text-[#d4a843]">
                      Season Calendar
                    </p>
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-[#524238]">
                      2026
                    </p>
                  </div>
                  <div className="mt-4 space-y-4">
                    {sampleSchedule.map((event) => (
                      <div
                        key={event.title}
                        className="grid gap-2 sm:grid-cols-[4.2rem_1fr]"
                      >
                        <p className="font-display text-2xl uppercase leading-none tracking-[0.06em] text-[#c41230]">
                          {event.date}
                        </p>
                        <div>
                          <p className="font-display text-[0.72rem] uppercase tracking-[0.16em] text-[#f2e8d9]">
                            {event.title}
                          </p>
                          <p className="mt-0.5 text-xs leading-5 text-[#786858]">{event.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="mx-auto max-w-7xl px-4 py-12 md:px-10 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left: Editorial crimson card */}
            <div className="crimson-card relative overflow-hidden p-8 md:p-10">
              <div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[rgba(196,18,48,0.18)] blur-3xl" />
              <div className="relative">
                <p className="text-[0.6rem] font-display uppercase tracking-[0.32em] text-[#d4a843]">
                  About The Program
                </p>
                <div className="gold-rule my-5 max-w-[4rem]" />
                <h2 className="font-display text-[2.6rem] uppercase leading-[0.9] tracking-[0.04em] text-[#f2e8d9] sm:text-[3.2rem] md:text-[4rem]">
                  A polished team that competes as hard as it performs.
                </h2>
              </div>
            </div>

            {/* Right: Feature cards */}
            <div className="grid gap-5 md:grid-cols-3">
              {highlightCards.map((card) => (
                <article key={card.title} className="panel p-6 md:p-7">
                  <p className="text-[0.6rem] font-display uppercase tracking-[0.28em] text-[#d4a843]">
                    {card.eyebrow}
                  </p>
                  <div className="gold-rule my-4" />
                  <h3 className="font-display text-xl uppercase leading-[1.15] tracking-[0.04em] text-[#f2e8d9]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[0.9rem] leading-7 text-[#786858]">{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Highlights ── */}
        <section id="highlights" className="mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            {/* Left: Description card */}
            <div className="relative overflow-hidden border border-[rgba(196,18,48,0.22)] bg-[linear-gradient(135deg,#130205_0%,#380010_60%,#6b001a_100%)] p-8 shadow-[0_28px_70px_rgba(0,0,0,0.35)] md:p-10">
              <div className="pointer-events-none absolute -top-8 right-0 h-40 w-40 rounded-full bg-[rgba(196,18,48,0.18)] blur-3xl animate-float-delayed" />
              <div className="relative">
                <p className="text-[0.6rem] font-display uppercase tracking-[0.3em] text-[#d4a843]">
                  Program Architecture
                </p>
                <div className="gold-rule my-5 max-w-[4rem]" />
                <h2 className="font-display text-[2.6rem] uppercase leading-[0.9] tracking-[0.04em] text-[#f2e8d9] sm:text-[3.2rem] md:text-[4rem]">
                  Built for hype, clarity, and easy updates.
                </h2>
                <p className="mt-6 max-w-sm text-base leading-7 text-[#c8b8a8]">
                  Three specialised units cover every context — from the tunnel to the competition floor to the community.
                </p>
              </div>
            </div>

            {/* Right: Team unit roster */}
            <div className="flex flex-col gap-5">
              {teamUnits.map((unit) => (
                <article
                  key={unit.name}
                  className="panel group flex items-start gap-6 p-6 transition duration-300 hover:border-[rgba(196,18,48,0.32)] hover:shadow-[0_24px_70px_rgba(0,0,0,0.3),0_0_32px_rgba(196,18,48,0.06)]"
                >
                  <span className="select-none font-display text-5xl uppercase leading-none tracking-[0.04em] text-[rgba(196,18,48,0.3)] transition-colors duration-300 group-hover:text-[rgba(196,18,48,0.58)] mt-1 shrink-0">
                    {unit.roman}
                  </span>
                  <div>
                    <p className="font-display text-xl uppercase tracking-[0.1em] text-[#d4a843]">
                      {unit.name}
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#786858]">{unit.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section id="gallery" className="mx-auto max-w-7xl px-4 py-12 md:px-10 md:py-16">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.6rem] font-display uppercase tracking-[0.32em] text-[#d4a843]">
                Program Moments
              </p>
              <div className="gold-rule my-5 max-w-[4rem]" />
              <h2 className="font-display text-[2.6rem] uppercase leading-[0.9] tracking-[0.04em] text-[#f2e8d9] sm:text-[3.2rem] md:text-[4.5rem]">
                Every frame tells the story.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-[#786858] md:shrink-0 md:text-right">
              Game day energy, competition focus, community presence — captured
              and ready to share.
            </p>
          </div>

          <div className="grid auto-rows-[14rem] gap-4 md:grid-cols-3">
            {programMoments.map((moment) => (
              <article
                key={moment.title}
                className={`${moment.colSpan} group relative overflow-hidden border border-[rgba(196,18,48,0.18)] p-6 text-[#f2e8d9] shadow-[0_20px_55px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_72px_rgba(0,0,0,0.38),0_0_40px_rgba(196,18,48,0.12)]`}
              >
                {/* Real photo */}
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  sizes={moment.colSpan ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,4,7,0.28)_0%,rgba(9,4,7,0.72)_60%,rgba(9,4,7,0.88)_100%)] transition duration-300 group-hover:opacity-90" />
                {/* Crimson bottom accent line */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,168,67,0.38)] to-transparent" />
                <div className="relative flex h-full flex-col justify-end">
                  <p className="font-display text-2xl uppercase tracking-[0.1em] text-[#f2e8d9]">
                    {moment.title}
                  </p>
                  <p className="mt-2 max-w-xs text-[0.8rem] leading-6 text-[rgba(242,232,217,0.68)]">
                    {moment.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:px-10 md:py-24">
          <div className="relative overflow-hidden border border-[rgba(196,18,48,0.32)] bg-[linear-gradient(135deg,#0d0205_0%,#2a0510_42%,#520016_100%)] px-7 py-12 shadow-[0_34px_90px_rgba(0,0,0,0.45),0_0_80px_rgba(196,18,48,0.06)] md:px-12 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[rgba(196,18,48,0.18)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-12 h-52 w-52 rounded-full bg-[rgba(212,168,67,0.05)] blur-3xl" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-start">
              <div>
                <p className="text-[0.6rem] font-display uppercase tracking-[0.3em] text-[#d4a843]">
                  Get Involved
                </p>
                <div className="gold-rule my-5 max-w-[4rem]" />
                <h2 className="font-display text-[2.8rem] uppercase leading-[0.88] tracking-[0.04em] text-[#f2e8d9] sm:text-[3.8rem] md:text-[5rem]">
                  Tryouts, events, sponsorship — we want to hear from you.
                </h2>
                <p className="mt-7 max-w-[52ch] text-base leading-7 text-[#c8b8a8] sm:text-lg sm:leading-8">
                  Whether you&apos;re interested in joining the squad, booking an
                  appearance, or partnering with the program — use the form or
                  reach us directly on Instagram{" "}
                  <a
                    href="https://instagram.com/knightsoftransylvania"
                    className="text-[#d4a843] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @knightsoftransylvania
                  </a>
                  .
                </p>

                <div className="mt-8 flex items-center gap-3 text-sm text-[#786858]">
                  <span className="inline-block h-px w-6 bg-[rgba(212,168,67,0.4)]" />
                  <a
                    href="mailto:team@knightsoftransylvania.com"
                    className="hover:text-[#d4a843] transition-colors duration-200"
                  >
                    team@knightsoftransylvania.com
                  </a>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
