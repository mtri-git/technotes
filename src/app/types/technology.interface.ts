// Core interfaces for TechNote application

export interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
  shortDescription: string;
  features: string[];
  useCases: string[];
  pros: string[];
  cons: string[];
  documentation?: string;
  officialSite?: string;
  githubRepo?: string;
  learningResources: LearningResource[];
  popularity: number;
  releaseDate: Date;
  lastUpdated: Date;
  tags: string[];
  logo?: string;
  version?: string;
  license?: string;
  maintainer?: string;
  communitySize?: 'small' | 'medium' | 'large';
  maturity?: 'experimental' | 'stable' | 'mature' | 'deprecated';
}

export interface TechCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  order: number;
}

export interface LearningResource {
  id: string;
  title: string;
  url: string;
  type: 'documentation' | 'tutorial' | 'course' | 'article' | 'video' | 'book' | 'blog';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration?: string;
  author?: string;
  rating?: number;
  isFree: boolean;
  description?: string;
}

export interface TechComparison {
  technologies: Technology[];
  criteria: ComparisonCriteria[];
  createdDate: Date;
  title: string;
  description?: string;
}

export interface ComparisonCriteria {
  name: string;
  description: string;
  weight: number; // 1-10
  type: 'rating' | 'boolean' | 'text' | 'number';
}

export interface UserNote {
  id: string;
  technologyId: string;
  userId: string;
  title: string;
  content: string;
  tags: string[];
  isPublic: boolean;
  createdDate: Date;
  lastUpdated: Date;
  likes: number;
}

export interface SearchFilters {
  categories: string[];
  tags: string[];
  popularity: {
    min: number;
    max: number;
  };
  maturity: string[];
  license: string[];
  searchText: string;
}

// Enums for better type safety
export enum TechCategoryType {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DEVOPS = 'devops',
  DATABASE = 'database',
  CLOUD = 'cloud',
  MOBILE = 'mobile',
  TESTING = 'testing',
  TOOLS = 'tools'
}

export enum DifficultyLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced'
}

export enum ResourceType {
  DOCUMENTATION = 'documentation',
  TUTORIAL = 'tutorial',
  COURSE = 'course',
  ARTICLE = 'article',
  VIDEO = 'video',
  BOOK = 'book',
  BLOG = 'blog'
}
