export type SanityImageAsset = {
  _key?: string
  _type?: 'sitePhotoAsset' | 'postImage' | 'image'
  asset?: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
  crop?: {
    _type: 'sanity.imageCrop'
    top: number
    bottom: number
    left: number
    right: number
  }
  hotspot?: {
    _type: 'sanity.imageHotspot'
    x: number
    y: number
    height: number
    width: number
  }
}

export type SanityPhotoAsset = SanityImageAsset

export type SanityPostCategory = 'noutati' | 'competitii' | 'proiecte' | 'anunturi'

export type SanityPortableTextLinkMark = {
  _key: string
  _type: 'link'
  href: string
}

export type SanityPortableTextSpan = {
  _key: string
  _type: 'span'
  marks?: string[]
  text?: string
}

export type SanityPortableTextBlock = {
  _key: string
  _type: 'block'
  style?: 'normal' | 'h2' | 'h3' | 'blockquote'
  children?: SanityPortableTextSpan[]
  listItem?: 'bullet' | 'number'
  level?: number
  markDefs?: SanityPortableTextLinkMark[]
}

export type SanityPostBodyBlock = SanityPortableTextBlock | SanityImageAsset

export type SanityPostPreview = {
  _id: string
  title: string
  slug: string
  category?: SanityPostCategory
  excerpt: string
  publishedAt: string
  featured?: boolean
  coverImage?: SanityImageAsset
}

export type SanityPost = SanityPostPreview & {
  body: SanityPostBodyBlock[]
}

export type SanitySponsorType = 'sponsor' | 'partener' | 'sustinator'

export type SanitySponsor = {
  _id: string
  name: string
  supportType?: SanitySponsorType
  websiteUrl?: string
  displayOnHomepage?: boolean
  sortOrder?: number
  logo?: SanityImageAsset
}

export type HomepageTone = 'cyan' | 'orange'

export type HomepageProjectSlot =
  | 'mondialTeamRo'
  | 'erasmus'
  | 'tabaraNationala'
  | 'frumuseteFaraFiltru'
  | 'nicioZiFaraSport'

export type HomepageEventSlot =
  | 'untold'
  | 'zileleClujului'
  | 'sportsFestival'
  | 'meciuriUbt'
  | 'wonderFamilyFest'
  | 'seasonOpeningShow'

export type HomepageProject = {
  _key?: string
  title: string
  label: string
  tone: HomepageTone
  slot: HomepageProjectSlot
  story: string
}

export type HomepageEvent = {
  _key?: string
  title: string
  tone: HomepageTone
  slot: HomepageEventSlot
}

export type HomepageContentDocument = {
  projects?: HomepageProject[]
  events?: HomepageEvent[]
}

export type SitePhotosDocument = {
  aboutMilestones?: {
    milestone2012?: SanityPhotoAsset
    milestone2016?: SanityPhotoAsset
    varsity2023?: SanityPhotoAsset
    salaKot2023?: SanityPhotoAsset
    milestone2019?: SanityPhotoAsset
    milestone2024?: SanityPhotoAsset
  }
  groups?: {
    mini?: SanityPhotoAsset
    u13Mixt?: SanityPhotoAsset
    u13FeteHu?: SanityPhotoAsset
    primaryLevel1?: SanityPhotoAsset
    primaryLevel2?: SanityPhotoAsset
    u19?: SanityPhotoAsset
    seniori?: SanityPhotoAsset
  }
  staff?: {
    coach1?: SanityPhotoAsset
    coach2?: SanityPhotoAsset
    coach3?: SanityPhotoAsset
    coach4?: SanityPhotoAsset
  }
  projects?: {
    mondialTeamRo?: SanityPhotoAsset
    erasmus?: SanityPhotoAsset
    tabaraNationala?: SanityPhotoAsset
    frumuseteFaraFiltru?: SanityPhotoAsset
    nicioZiFaraSport?: SanityPhotoAsset
  }
  events?: {
    untold?: SanityPhotoAsset
    zileleClujului?: SanityPhotoAsset
    sportsFestival?: SanityPhotoAsset
    meciuriUbt?: SanityPhotoAsset
    wonderFamilyFest?: SanityPhotoAsset
    seasonOpeningShow?: SanityPhotoAsset
  }
}
