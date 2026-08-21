/** Jersey-number heading that opens each section. */
export default function SectionMark({ index, children, tone = 'flame' }: {
  index: string
  children: React.ReactNode
  tone?: 'flame' | 'ember' | 'white'
}) {
  return (
    <div className="kot-mark" data-reveal>
      <span className={`kot-mark__num kot-mark__num--${tone}`} aria-hidden="true">{index}</span>
      <span className="kot-mark__rule" aria-hidden="true" />
      <span className="kot-mark__label">{children}</span>
    </div>
  )
}
