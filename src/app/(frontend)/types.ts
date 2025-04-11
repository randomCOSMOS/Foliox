export interface PersonalInfo {
  id: number;
  name: string;
  tagline: string;
  currentPosition: string | null;
  contactInfo: {
    email: string;
    phone: string;
  };
  socialLinks: {
    linkedin: string;
    github: string;
    instagram: string;
  };
  updatedAt: string;
  createdAt: string;
  globalType: string;
}
  
export interface Project {
  id: number;
  title: string;
  description: string;
  skillTags: SkillTag[];
  author: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  thumbnailURL: string | null;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  repository?: string;
}
  
export interface SkillTag {
  id: number;
  tag: string;
}
  
export interface Achievement {
  id: number;
  title: string;
  date: string;
  organization: string;
  description: string;
  tags: Tag[];
  link: string;
  updatedAt: string;
  createdAt: string;
}
  
export interface Tag {
  id: number;
  tag: string;
}
  
export interface Blog {
  id: number;
  title: string;
  author: string;
  content: string;
  updatedAt: string;
  createdAt: string;
  url: string;
  thumbnailURL: string | null;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
}