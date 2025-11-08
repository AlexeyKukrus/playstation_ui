export interface MenuCategory {
  id: string;
  label: string;
  icon?: string;
  isActive?: boolean;
}

export type MenuCategoryId = 
  | 'all'
  | 'racing'
  | 'roleplaying'
  | 'sports'
  | 'online'
  | 'shooting'
  | 'action'
  | 'adventure'
  | 'fighting';

