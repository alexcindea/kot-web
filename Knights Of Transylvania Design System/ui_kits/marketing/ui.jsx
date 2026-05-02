// Shared UI primitives for KOT marketing site

const { useState, useEffect, useRef } = React;

function cx(...parts) { return parts.filter(Boolean).join(' '); }

function Container({ children, className, style }) {
  return (
    <div className={cx('kot-container', className)} style={style}>
      {children}
    </div>
  );
}

function Eyebrow({ children, color = 'orange' }) {
  return (
    <div className="kot-eyebrow-row">
      <span className={cx('kot-eyebrow-dot', `dot-${color}`)} />
      <span className="kot-eyebrow-text">{children}</span>
    </div>
  );
}

function Button({ children, variant = 'primary', size = 'md', as = 'button', href, onClick, icon }) {
  const Tag = as;
  return (
    <Tag
      className={cx('kot-btn', `kot-btn--${variant}`, `kot-btn--${size}`)}
      href={href}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <i data-lucide={icon} />}
    </Tag>
  );
}

function Pill({ children, tone = 'cyan', soft = false }) {
  return (
    <span className={cx('kot-pill', `kot-pill--${tone}`, soft && 'kot-pill--soft')}>
      {children}
    </span>
  );
}

// Kinetic letter component — animates each letter from below baseline
function KineticText({ text, delay = 0, stagger = 35, className }) {
  const letters = text.split('');
  return (
    <span className={cx('kot-kinetic', className)} aria-label={text}>
      {letters.map((ch, i) => (
        <span
          key={i}
          className="kot-kinetic__letter"
          style={{ animationDelay: `${delay + i * stagger}ms` }}
          aria-hidden="true"
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </span>
  );
}

// Reveal-on-scroll wrapper
function Reveal({ children, className, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={cx('kot-reveal', shown && 'is-shown', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// Photo placeholder — gradient + caption
function Photo({ caption, ratio = '16/9', tone = 'cyan', className, children, style }) {
  return (
    <div
      className={cx('kot-photo', `kot-photo--${tone}`, className)}
      style={{ aspectRatio: ratio, ...(style || {}) }}
    >
      <div className="kot-photo__inner">{children}</div>
      {caption && <div className="kot-photo__caption">{caption}</div>}
    </div>
  );
}

window.KOT_UI = { Container, Eyebrow, Button, Pill, KineticText, Reveal, Photo, cx };
