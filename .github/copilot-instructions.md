# GitHub Copilot Instructions for TechNote Project

## Project Overview
TechNote is an Angular 20-based technology documentation and note-taking website. The application serves as a comprehensive hub for documenting, organizing, and exploring various technologies across different domains.

## Core Purpose & Context
- **Primary Goal**: Create a centralized platform for technology documentation and learning
- **Target Audience**: Developers, tech enthusiasts, and teams looking to document and share technology knowledge
- **Content Focus**: Detailed information about technologies in Frontend, Backend, DevOps, Databases, and Cloud platforms

## Technology Categories & Examples

### Frontend Technologies
When working with frontend-related features, consider these technologies:
- **React**: Component-based library, hooks, JSX, virtual DOM
- **Angular**: TypeScript framework, dependency injection, observables, directives
- **Vue.js**: Progressive framework, composition API, single-file components
- **Svelte**: Compile-time optimized, no virtual DOM, reactive statements
- **Next.js**: React SSR/SSG, API routes, file-based routing
- **Nuxt.js**: Vue.js SSR/SSG, auto-routing, middleware

### Backend Technologies
When implementing backend-related documentation features:
- **Fastify**: High-performance Node.js framework, schema validation, plugins
- **NestJS**: Decorator-based architecture, modules, guards, interceptors
- **Express.js**: Minimal framework, middleware, routing, RESTful APIs
- **Koa.js**: Async/await support, context object, middleware composition
- **Hapi.js**: Configuration-centric, built-in validation, caching

### DevOps Technologies
For DevOps-related content and features:
- **ArgoCD**: GitOps workflow, Kubernetes deployment, application syncing
- **Jenkins**: Pipeline as code, build automation, plugin ecosystem
- **Docker**: Containerization, Dockerfile, multi-stage builds, orchestration
- **Kubernetes**: Container orchestration, pods, services, deployments
- **Terraform**: Infrastructure as Code, providers, modules, state management
- **Ansible**: Configuration management, playbooks, inventory, roles
- **GitHub Actions**: Workflow automation, CI/CD, marketplace actions

### Database Technologies
When implementing data-related features:
- **PostgreSQL**: ACID compliance, advanced queries, extensions, performance tuning
- **MongoDB**: Document storage, aggregation pipeline, indexing, sharding
- **Redis**: In-memory caching, pub/sub, data structures, clustering
- **MySQL**: Relational database, query optimization, replication, InnoDB

### Cloud Platforms
For cloud-related documentation:
- **AWS**: EC2, S3, Lambda, RDS, CloudFormation, EKS
- **Azure**: Virtual Machines, Blob Storage, Functions, SQL Database, AKS
- **GCP**: Compute Engine, Cloud Storage, Cloud Functions, Cloud SQL, GKE
- **Vercel**: Edge functions, serverless deployment, domain management
- **Netlify**: JAMstack hosting, edge functions, form handling, split testing

## Code Style & Architecture Guidelines

### Angular Best Practices
- Use standalone components (Angular 14+ pattern)
- Implement OnPush change detection strategy for performance
- Follow reactive programming patterns with RxJS
- Use Angular CLI for component generation
- Implement proper error handling and loading states

### Component Structure
```typescript
@Component({
  selector: 'app-tech-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tech-card.component.html',
  styleUrls: ['./tech-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechCardComponent {
  // Component implementation
}
```

### Service Patterns
- Use dependency injection for services
- Implement proper error handling with catchError operator
- Use BehaviorSubject for state management
- Follow single responsibility principle

### Naming Conventions
- **Components**: PascalCase (e.g., `TechCardComponent`)
- **Services**: PascalCase with Service suffix (e.g., `TechnologyService`)
- **Interfaces**: PascalCase with interface description (e.g., `Technology`, `TechCategory`)
- **Files**: kebab-case (e.g., `tech-card.component.ts`)

## Data Models & Interfaces

### Core Technology Interface
```typescript
interface Technology {
  id: string;
  name: string;
  category: TechCategory;
  description: string;
  features: string[];
  useCases: string[];
  documentation?: string;
  officialSite?: string;
  githubRepo?: string;
  learningResources: LearningResource[];
  popularity: number;
  releaseDate: Date;
  lastUpdated: Date;
  tags: string[];
}

interface TechCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

interface LearningResource {
  title: string;
  url: string;
  type: 'documentation' | 'tutorial' | 'course' | 'article' | 'video';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}
```

## Feature Implementation Guidelines

### When Creating Technology Documentation Features:
1. **Search & Filter**: Implement fuzzy search across technology names, descriptions, and tags
2. **Category Navigation**: Create intuitive navigation between technology categories
3. **Detail Views**: Provide comprehensive technology detail pages with examples, use cases, and resources
4. **Comparison Tools**: Allow side-by-side comparison of similar technologies
5. **Learning Paths**: Suggest learning progression between related technologies

### UI/UX Considerations:
- **Responsive Design**: Ensure mobile-first approach
- **Dark/Light Theme**: Implement theme switching capability
- **Accessibility**: Follow WCAG guidelines, proper ARIA labels
- **Performance**: Lazy loading for images and components
- **SEO**: Implement proper meta tags and structured data

### Content Management:
- **Markdown Support**: Allow rich text formatting for technology descriptions
- **Version Control**: Track changes to technology information
- **User Contributions**: Enable community contributions and reviews
- **Content Validation**: Implement content quality checks

## Development Workflow

### When Adding New Technologies:
1. Define the technology data model
2. Create appropriate components for display
3. Implement search and filter capabilities
4. Add proper routing and navigation
5. Include comprehensive documentation and examples
6. Test across different devices and browsers

### Code Generation Patterns:
- Use Angular CLI schematics for consistent component generation
- Follow established folder structure
- Implement proper TypeScript types
- Include unit tests for new components and services
- Document public APIs and complex logic

## Testing Strategy
- **Unit Tests**: Use Jasmine and Karma for component and service testing
- **Integration Tests**: Test component interactions and data flow
- **E2E Tests**: Implement user journey testing for critical paths
- **Performance Tests**: Monitor bundle size and loading times

## Deployment & Build
- **Production Build**: Optimize for performance with AOT compilation
- **SSR Support**: Leverage Angular Universal for server-side rendering
- **Progressive Enhancement**: Ensure basic functionality without JavaScript
- **Caching Strategy**: Implement appropriate caching headers and service worker

This project aims to be the go-to resource for technology documentation and learning, helping developers make informed decisions about technology choices and providing comprehensive information about modern development tools and frameworks.
