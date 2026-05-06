import type { SanityPostCategory } from '@/sanity/lib/types'

const roDateFormatter = new Intl.DateTimeFormat('ro-RO', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

const postCategoryLabels: Record<SanityPostCategory, string> = {
  noutati: 'Noutăți',
  competitii: 'Competiții',
  proiecte: 'Proiecte',
  anunturi: 'Anunțuri',
}

export function formatSanityDate(value: string) {
  return roDateFormatter.format(new Date(value))
}

export function getPostCategoryLabel(category?: SanityPostCategory) {
  if (!category) {
    return postCategoryLabels.noutati
  }

  return postCategoryLabels[category] ?? postCategoryLabels.noutati
}