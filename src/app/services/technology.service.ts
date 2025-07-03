import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Technology, TechCategory, SearchFilters } from '../types/technology.interface';
import { SAMPLE_TECHNOLOGIES, TECH_CATEGORIES } from '../data/sample-data';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private technologiesSubject = new BehaviorSubject<Technology[]>(SAMPLE_TECHNOLOGIES);
  private categoriesSubject = new BehaviorSubject<TechCategory[]>(TECH_CATEGORIES);

  // Observable streams
  public technologies$ = this.technologiesSubject.asObservable();
  public categories$ = this.categoriesSubject.asObservable();

  constructor() { }

  /**
   * Get all technologies
   */
  getAllTechnologies(): Observable<Technology[]> {
    return this.technologies$;
  }

  /**
   * Get all categories
   */
  getAllCategories(): Observable<TechCategory[]> {
    return this.categories$;
  }

  /**
   * Get technology by ID
   */
  getTechnologyById(id: string): Observable<Technology | undefined> {
    return this.technologies$.pipe(
      map(technologies => technologies.find(tech => tech.id === id))
    );
  }

  /**
   * Get technologies by category
   */
  getTechnologiesByCategory(categoryId: string): Observable<Technology[]> {
    return this.technologies$.pipe(
      map(technologies => technologies.filter(tech => tech.category.id === categoryId))
    );
  }

  /**
   * Search technologies with filters
   */
  searchTechnologies(searchFilters: Partial<SearchFilters>): Observable<Technology[]> {
    return this.technologies$.pipe(
      map(technologies => {
        let filtered = technologies;

        // Filter by search text
        if (searchFilters.searchText) {
          const searchText = searchFilters.searchText.toLowerCase();
          filtered = filtered.filter(tech =>
            tech.name.toLowerCase().includes(searchText) ||
            tech.description.toLowerCase().includes(searchText) ||
            tech.tags.some(tag => tag.toLowerCase().includes(searchText))
          );
        }

        // Filter by categories
        if (searchFilters.categories && searchFilters.categories.length > 0) {
          filtered = filtered.filter(tech =>
            searchFilters.categories!.includes(tech.category.id)
          );
        }

        // Filter by tags
        if (searchFilters.tags && searchFilters.tags.length > 0) {
          filtered = filtered.filter(tech =>
            searchFilters.tags!.some(tag => tech.tags.includes(tag))
          );
        }

        // Filter by popularity range
        if (searchFilters.popularity) {
          filtered = filtered.filter(tech =>
            tech.popularity >= searchFilters.popularity!.min &&
            tech.popularity <= searchFilters.popularity!.max
          );
        }

        // Filter by maturity
        if (searchFilters.maturity && searchFilters.maturity.length > 0) {
          filtered = filtered.filter(tech =>
            tech.maturity && searchFilters.maturity!.includes(tech.maturity)
          );
        }

        return filtered;
      })
    );
  }

  /**
   * Get popular technologies (top N by popularity score)
   */
  getPopularTechnologies(limit: number = 10): Observable<Technology[]> {
    return this.technologies$.pipe(
      map(technologies =>
        technologies
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, limit)
      )
    );
  }

  /**
   * Get recently updated technologies
   */
  getRecentlyUpdatedTechnologies(limit: number = 5): Observable<Technology[]> {
    return this.technologies$.pipe(
      map(technologies =>
        technologies
          .sort((a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime())
          .slice(0, limit)
      )
    );
  }

  /**
   * Get unique tags from all technologies
   */
  getAllTags(): Observable<string[]> {
    return this.technologies$.pipe(
      map(technologies => {
        const allTags = technologies.flatMap(tech => tech.tags);
        return Array.from(new Set(allTags)).sort();
      })
    );
  }

  /**
   * Get technologies count by category
   */
  getTechnologiesCountByCategory(): Observable<{[categoryId: string]: number}> {
    return this.technologies$.pipe(
      map(technologies => {
        const counts: {[categoryId: string]: number} = {};
        technologies.forEach(tech => {
          counts[tech.category.id] = (counts[tech.category.id] || 0) + 1;
        });
        return counts;
      })
    );
  }

  /**
   * Compare technologies
   */
  compareTechnologies(technologyIds: string[]): Observable<Technology[]> {
    return this.technologies$.pipe(
      map(technologies =>
        technologies.filter(tech => technologyIds.includes(tech.id))
      )
    );
  }

  /**
   * Get similar technologies based on tags and category
   */
  getSimilarTechnologies(technologyId: string, limit: number = 3): Observable<Technology[]> {
    return this.technologies$.pipe(
      map(technologies => {
        const targetTech = technologies.find(tech => tech.id === technologyId);
        if (!targetTech) return [];

        const similar = technologies
          .filter(tech => tech.id !== technologyId)
          .map(tech => {
            let score = 0;

            // Same category gets higher score
            if (tech.category.id === targetTech.category.id) {
              score += 10;
            }

            // Common tags increase score
            const commonTags = tech.tags.filter(tag => targetTech.tags.includes(tag));
            score += commonTags.length * 2;

            return { technology: tech, score };
          })
          .sort((a, b) => b.score - a.score)
          .slice(0, limit)
          .map(item => item.technology);

        return similar;
      })
    );
  }
}
