export interface ICategory {
  title: string;
  slug: TCategorySlug;
  key?: string;
  shortcut?: string;
}

export type TCategorySlug =
  | "all"
  | "racing"
  | "roleplaying"
  | "sports"
  | "online"
  | "shooter";
