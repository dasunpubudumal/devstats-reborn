export interface StackOverflowUser {
  items: any[];
}

export interface BadgeCounts {
  bronze: number;
  silver: number;
  gold: number;
}

export interface User {
  badge_counts: BadgeCounts;
  account_id: number;
  is_employee: boolean;
  last_modified_date: number;
  last_access_date: number;
  reputation_change_year: number;
  creation_date: number;
  location: string;
  website_url: string;
  profile_image: string;
  link: string;
  display_name: string;
}
