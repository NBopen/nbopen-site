export interface ActivityOption {
  DESC: string
}

export interface GroupedSectionPage {
  cover: string
  tag?: string[]
  title: string
  url: string
  badge: string
  author: string
  date: string
  description:string
  repos?:string[]
}
export type GroupedSectionPages = Record<string, GroupedSectionPage[]>;

export interface Project {
  cover: string
  tag?: string[]
  title: string
  url: string
  badge: string
  author: string
  date: string
  sort: number
  description:string
  repos?:string[]
}



export type Projects = Record<string, Project[]>;
