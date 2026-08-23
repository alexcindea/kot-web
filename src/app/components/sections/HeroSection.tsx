import { ArrowRight, Play, ChevronRight, HeartHandshake } from 'lucide-react'

import { SPONSOR_CONTACT_URL } from '@/app/content/sponsorship'

import HeroRotate from '@/app/components/HeroRotate'
import CountUp from '@/app/components/fx/CountUp'
import Magnetic from '@/app/components/fx/Magnetic'
import Parallax from '@/app/components/fx/Parallax'

export default function HeroSection() {
  return (
    <section className="kot-hero" id="top">
      <div className="kot-hero__bg" aria-hidden="true">
        <div className="kot-hero__beam kot-hero__beam--warm" />
        <div className="kot-hero__beam kot-hero__beam--orange" />
        <div className="kot-hero__halftone" />
        <Parallax className="kot-hero__watermark" from={-30} to={110}>KOT</Parallax>
        <div className="kot-hero__floor" />
      </div>

      <div className="kot-container kot-hero__inner">
        <div className="kot-hero__eyebrow">
          <span className="kot-hero__dot" />
          Knights of Transylvania · Cluj-Napoca · est. 2014
        </div>

        <h1 className="kot-hero__title">
          <span className="kot-hero__title-main">
            CHEER<span className="kot-hero__title-flip">LEADING</span>
          </span>
          <span className="kot-hero__title-sub">
            <HeroRotate />
          </span>
        </h1>

        <p className="kot-hero__lede">
          Peste 130 de sportivi între 5 și 30 de ani, 16 instructori și 12
          țări în care am dus tricolorul. În 2025 am fost nucleul primei
          echipe naționale a României la ICU Cheerleading Worlds.
        </p>

        {/* The site's two audiences, given equal weight: families joining and
            companies backing. Separated by value, not hue. */}
        <div className="kot-hero__ctas">
          <Magnetic>
            <a href="#contact" className="kot-btn kot-btn--accent kot-btn--lg">
              <span>Încearcă și tu</span>
              <ArrowRight size={18} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href={SPONSOR_CONTACT_URL} className="kot-btn kot-btn--chalk kot-btn--lg">
              <HeartHandshake size={18} />
              <span>Devino sponsor</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#despre" className="kot-btn kot-btn--ghost kot-btn--lg">
              <Play size={18} />
              <span>Despre KOT</span>
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="kot-container">
        <div className="kot-hero__stats" role="list" aria-label="KOT în cifre">
          <div role="listitem"><CountUp value={130} suffix="+" /><span>Sportivi activi</span></div>
          <div role="listitem"><CountUp value={16} suffix="+" duration={1.2} /><span>Instructori</span></div>
          <div role="listitem"><CountUp value={12} suffix="+" duration={1.2} /><span>Țări concurate</span></div>
          <div role="listitem"><CountUp value={10} suffix="K+" duration={1} /><span>Spectatori</span></div>
        </div>
      </div>

      <div className="kot-hero__scroll" aria-hidden="true">
        <span>SCROLL</span>
        <ChevronRight size={16} />
      </div>
    </section>
  )
}
