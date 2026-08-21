import type { SitePhotosDocument } from '@/sanity/lib/types'

export type TrainingGroup = {
  id: keyof NonNullable<SitePhotosDocument['groups']>
  name: string
  age: string
  format: string
  description: string
  note?: string
  tone: 'flame' | 'ember'
}

export const groups: TrainingGroup[] = [
  {
    id: 'mini',
    name: 'Mini',
    age: '5–7 ani',
    format: 'Start',
    description: 'Grupa în care cei mici descoperă bazele cheerleadingului prin joc, ritm și încredere.',
    tone: 'flame',
  },
  {
    id: 'u13Mixt',
    name: 'U13 Mixt',
    age: 'Sub 13 ani',
    format: 'Mixt',
    description: 'Pentru sportivii U13 care lucrează tehnica de bază, coordonarea și lucrul în echipă.',
    tone: 'ember',
  },
  {
    id: 'u13FeteHu',
    name: 'U13 Fete',
    age: 'Sub 13 ani',
    format: 'Fete',
    description: 'Grupă dedicată fetelor U13, într-un ritm potrivit de învățare și progres.',
    note: 'Predare în limba maghiară',
    tone: 'flame',
  },
  {
    id: 'primaryLevel1',
    name: 'Primary Level 1',
    age: '8–13 ani',
    format: 'Level 1',
    description: 'Pentru sportivii 8–13 ani care construiesc fundația tehnică și încep să lucreze în formulă de echipă.',
    tone: 'ember',
  },
  {
    id: 'primaryLevel2',
    name: 'Primary Level 2',
    age: '8–13 ani',
    format: 'Level 2',
    description: 'Grupă de progres pentru sportivii care sunt gata să treacă la cerințe și combinații mai avansate.',
    tone: 'flame',
  },
  {
    id: 'u19',
    name: 'U19',
    age: 'Sub 19 ani',
    format: 'Competițional',
    description: 'Categorie pentru sportivii care își dezvoltă constanța, expresivitatea și lucrul de echipă la nivel U19.',
    tone: 'ember',
  },
  {
    id: 'seniori',
    name: 'Seniori',
    age: '16+ ani',
    format: 'Competițional',
    description: 'Grupa seniorilor reunește sportivii 16+ care lucrează rutine complete, energie de concurs și identitate de echipă.',
    tone: 'flame',
  },
]
