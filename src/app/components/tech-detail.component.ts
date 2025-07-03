import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, finalize } from 'rxjs/operators';

import { TechnologyService } from '../services/technology.service';
import { Technology } from '../types/technology.interface';

@Component({
  selector: 'app-tech-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tech-detail.component.html',
  styleUrls: ['./tech-detail.component.css']
})
export class TechDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private technologyService = inject(TechnologyService);

  technology$!: Observable<Technology | null>;
  similarTechnologies$!: Observable<Technology[]>;
  isLoading = false;
  error: string | null = null;

  ngOnInit() {
    this.isLoading = true; // Explicitly set loading to true at start

    this.technology$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => {
        if (!id) {
          this.error = 'Technology ID not found';
          return of(null);
        }
        return this.technologyService.getTechnologyById(id);
      }),
      map(tech => {
        if (!tech) {
          this.error = 'Technology not found';
          return null;
        }
        this.error = null;

        // Load similar technologies
        this.similarTechnologies$ = this.technologyService.getSimilarTechnologies(tech.id, 3);

        return tech;
      }),
      catchError(err => {
        this.error = 'Failed to load technology details';
        console.error('Error loading technology:', err);
        return of(null);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }

  navigateToTechnology(techId: string) {
    this.router.navigate(['/technology', techId]);
  }

  openExternalLink(url: string) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
