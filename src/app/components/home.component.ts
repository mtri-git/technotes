import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TechnologyService } from '../services/technology.service';
import { Technology, TechCategory } from '../types/technology.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Observables for template
  technologies$!: Observable<Technology[]>;
  categories$!: Observable<TechCategory[]>;
  popularTechnologies$!: Observable<Technology[]>;

  constructor(private technologyService: TechnologyService) {}

  ngOnInit() {
    // Initialize data streams
    this.technologies$ = this.technologyService.getAllTechnologies();
    this.categories$ = this.technologyService.getAllCategories();
    this.popularTechnologies$ = this.technologyService.getPopularTechnologies(4);
  }
}
