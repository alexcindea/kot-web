// Infinite marquee strip — runs between sections
function MarqueeStrip({ items, tone = 'orange', icon = 'star' }) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className={'kot-marquee kot-marquee--' + tone}>
      <div className="kot-marquee__track">
        {repeated.map((it, i) => (
          <span key={i} className="kot-marquee__item">
            <span>{it}</span>
            <i data-lucide={icon} />
          </span>
        ))}
      </div>
    </div>
  );
}

window.KOT_Marquee = MarqueeStrip;
