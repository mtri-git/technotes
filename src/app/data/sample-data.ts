import { Technology, TechCategory, TechCategoryType, LearningResource, ResourceType, DifficultyLevel } from '../types/technology.interface';

// Sample Technology Categories
export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'User interface frameworks and libraries',
    icon: '🎨',
    color: '#3B82F6',
    order: 1
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Server-side frameworks and APIs',
    icon: '⚙️',
    color: '#10B981',
    order: 2
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'Development operations and automation tools',
    icon: '🚀',
    color: '#F59E0B',
    order: 3
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Data storage and management systems',
    icon: '🗄️',
    color: '#8B5CF6',
    order: 4
  },
  {
    id: 'cloud',
    name: 'Cloud',
    description: 'Cloud platforms and services',
    icon: '☁️',
    color: '#EF4444',
    order: 5
  }
];

// Sample Technologies Data
export const SAMPLE_TECHNOLOGIES: Technology[] = [
  {
    id: 'react',
    name: 'React',
    category: TECH_CATEGORIES[0], // Frontend
    description: 'A JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.',
    shortDescription: 'JavaScript library for building user interfaces',
    features: [
      'Component-based architecture',
      'Virtual DOM for performance',
      'Unidirectional data flow',
      'JSX syntax',
      'React Hooks',
      'Large ecosystem'
    ],
    useCases: [
      'Single Page Applications (SPAs)',
      'Interactive web applications',
      'Mobile apps with React Native',
      'Progressive Web Apps',
      'Component libraries'
    ],
    pros: [
      'Large community and ecosystem',
      'Excellent performance with Virtual DOM',
      'Flexible and reusable components',
      'Strong developer tools',
      'Backed by Meta (Facebook)'
    ],
    cons: [
      'Steep learning curve for beginners',
      'Rapidly changing ecosystem',
      'Only the view layer',
      'JSX can be confusing initially'
    ],
    officialSite: 'https://react.dev',
    githubRepo: 'https://github.com/facebook/react',
    documentation: 'https://react.dev/learn',
    learningResources: [
      {
        id: 'react-docs',
        title: 'Official React Documentation',
        url: 'https://react.dev/learn',
        type: ResourceType.DOCUMENTATION,
        difficulty: DifficultyLevel.BEGINNER,
        isFree: true,
        description: 'Official comprehensive documentation for React'
      }
    ],
    popularity: 95,
    releaseDate: new Date('2013-05-29'),
    lastUpdated: new Date(),
    tags: ['javascript', 'frontend', 'spa', 'component-based', 'virtual-dom'],
    version: '18.x',
    license: 'MIT',
    maintainer: 'Meta (Facebook)',
    communitySize: 'large',
    maturity: 'mature'
  },
  {
    id: 'angular',
    name: 'Angular',
    category: TECH_CATEGORIES[0], // Frontend
    description: 'A platform and framework for building single-page client applications using HTML and TypeScript.',
    shortDescription: 'TypeScript-based web application framework',
    features: [
      'TypeScript by default',
      'Dependency injection',
      'Two-way data binding',
      'Directives and components',
      'RxJS for reactive programming',
      'Angular CLI'
    ],
    useCases: [
      'Enterprise web applications',
      'Progressive Web Apps',
      'Single Page Applications',
      'Desktop apps with Electron',
      'Mobile apps with Ionic'
    ],
    pros: [
      'Full-featured framework',
      'Strong TypeScript support',
      'Excellent tooling and CLI',
      'Backed by Google',
      'Great for large applications'
    ],
    cons: [
      'Steep learning curve',
      'Heavy framework',
      'Complex for simple applications',
      'Frequent major updates'
    ],
    officialSite: 'https://angular.dev',
    githubRepo: 'https://github.com/angular/angular',
    documentation: 'https://angular.dev/overview',
    learningResources: [
      {
        id: 'angular-docs',
        title: 'Official Angular Documentation',
        url: 'https://angular.dev/overview',
        type: ResourceType.DOCUMENTATION,
        difficulty: DifficultyLevel.INTERMEDIATE,
        isFree: true,
        description: 'Official comprehensive documentation for Angular'
      }
    ],
    popularity: 85,
    releaseDate: new Date('2016-09-14'),
    lastUpdated: new Date(),
    tags: ['typescript', 'frontend', 'spa', 'enterprise', 'dependency-injection'],
    version: '20.x',
    license: 'MIT',
    maintainer: 'Google',
    communitySize: 'large',
    maturity: 'mature'
  },
  {
    id: 'fastify',
    name: 'Fastify',
    category: TECH_CATEGORIES[1], // Backend
    description: 'Fast and low overhead web framework for Node.js with powerful plugin architecture and TypeScript support.',
    shortDescription: 'Fast Node.js web framework',
    features: [
      'High performance',
      'Low overhead',
      'Plugin architecture',
      'JSON Schema validation',
      'TypeScript support',
      'Async/await support'
    ],
    useCases: [
      'RESTful APIs',
      'Microservices',
      'Real-time applications',
      'High-performance backends',
      'GraphQL servers'
    ],
    pros: [
      'Excellent performance',
      'Low memory footprint',
      'Great plugin ecosystem',
      'Built-in validation',
      'TypeScript friendly'
    ],
    cons: [
      'Smaller community than Express',
      'Fewer resources and tutorials',
      'Less mature ecosystem',
      'Learning curve for plugins'
    ],
    officialSite: 'https://fastify.dev',
    githubRepo: 'https://github.com/fastify/fastify',
    documentation: 'https://fastify.dev/docs/',
    learningResources: [
      {
        id: 'fastify-docs',
        title: 'Official Fastify Documentation',
        url: 'https://fastify.dev/docs/latest',
        type: ResourceType.DOCUMENTATION,
        difficulty: DifficultyLevel.INTERMEDIATE,
        isFree: true,
        description: 'Official documentation for Fastify framework'
      }
    ],
    popularity: 75,
    releaseDate: new Date('2016-10-27'),
    lastUpdated: new Date(),
    tags: ['nodejs', 'backend', 'api', 'performance', 'typescript'],
    version: '5.x',
    license: 'MIT',
    maintainer: 'Fastify Team',
    communitySize: 'medium',
    maturity: 'stable'
  },
  {
    id: 'argocd',
    name: 'ArgoCD',
    category: TECH_CATEGORIES[2], // DevOps
    description: 'Declarative, GitOps continuous delivery tool for Kubernetes with a web UI and CLI.',
    shortDescription: 'GitOps continuous delivery for Kubernetes',
    features: [
      'GitOps methodology',
      'Declarative configuration',
      'Automated deployment',
      'Web UI and CLI',
      'Multi-cluster support',
      'RBAC and SSO integration'
    ],
    useCases: [
      'Kubernetes application deployment',
      'GitOps workflows',
      'Multi-environment management',
      'Continuous delivery pipelines',
      'Infrastructure as Code'
    ],
    pros: [
      'GitOps best practices',
      'Excellent Kubernetes integration',
      'Great visualization',
      'Active community',
      'CNCF graduated project'
    ],
    cons: [
      'Kubernetes knowledge required',
      'Can be complex for simple deployments',
      'Resource intensive',
      'Learning curve for GitOps'
    ],
    officialSite: 'https://argo-cd.readthedocs.io',
    githubRepo: 'https://github.com/argoproj/argo-cd',
    documentation: 'https://argo-cd.readthedocs.io/en/stable/',
    learningResources: [
      {
        id: 'argocd-docs',
        title: 'Official ArgoCD Documentation',
        url: 'https://argo-cd.readthedocs.io/en/stable/',
        type: ResourceType.DOCUMENTATION,
        difficulty: DifficultyLevel.ADVANCED,
        isFree: true,
        description: 'Official documentation for ArgoCD'
      }
    ],
    popularity: 80,
    releaseDate: new Date('2018-03-12'),
    lastUpdated: new Date(),
    tags: ['kubernetes', 'gitops', 'devops', 'deployment', 'cd'],
    version: '2.x',
    license: 'Apache 2.0',
    maintainer: 'Argo Project',
    communitySize: 'large',
    maturity: 'mature'
  }
];

// Helper functions to get technologies by category
export const getTechnologiesByCategory = (categoryId: string): Technology[] => {
  return SAMPLE_TECHNOLOGIES.filter(tech => tech.category.id === categoryId);
};

export const getFrontendTechnologies = (): Technology[] => {
  return getTechnologiesByCategory('frontend');
};

export const getBackendTechnologies = (): Technology[] => {
  return getTechnologiesByCategory('backend');
};

export const getDevOpsTechnologies = (): Technology[] => {
  return getTechnologiesByCategory('devops');
};

export const getDatabaseTechnologies = (): Technology[] => {
  return getTechnologiesByCategory('database');
};

export const getCloudTechnologies = (): Technology[] => {
  return getTechnologiesByCategory('cloud');
};
