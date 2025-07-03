import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </div>
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-2xl">
        <li><span class="menu-title">Choose Theme</span></li>
        <li *ngFor="let theme of themes" (click)="changeTheme(theme.value)">
          <a class="flex items-center justify-between" [class.active]="currentTheme === theme.value">
            <span class="flex items-center gap-2">
              <span [style.background-color]="theme.color" class="w-3 h-3 rounded-full"></span>
              {{ theme.name }}
            </span>
            <span *ngIf="currentTheme === theme.value" class="text-primary">✓</span>
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .menu-title {
      font-size: 0.75rem;
      font-weight: 600;
      color: hsl(var(--bc) / 0.7);
      padding: 0.5rem 1rem;
      margin-bottom: 0.25rem;
    }

    .dropdown-content {
      border: 1px solid hsl(var(--b3));
    }

    .menu li > a.active {
      background-color: hsl(var(--p) / 0.1);
      color: hsl(var(--p));
    }
  `]
})
export class ThemeSwitcherComponent implements OnInit {
  currentTheme = 'light';

  themes = [
    { name: 'Light', value: 'light', color: '#ffffff' },
    { name: 'Dark', value: 'dark', color: '#1f2937' },
    // { name: 'TechNote', value: 'technote', color: '#3b82f6' },
    // { name: 'Cupcake', value: 'cupcake', color: '#faf7f5' },
    // { name: 'Bumblebee', value: 'bumblebee', color: '#f9d71c' },
    // { name: 'Emerald', value: 'emerald', color: '#10b981' },
    // { name: 'Corporate', value: 'corporate', color: '#4b5563' },
    // { name: 'Synthwave', value: 'synthwave', color: '#e779c1' },
    // { name: 'Retro', value: 'retro', color: '#ef9995' },
    // { name: 'Cyberpunk', value: 'cyberpunk', color: '#ff7598' },
    // { name: 'Valentine', value: 'valentine', color: '#e96d7b' },
    // { name: 'Halloween', value: 'halloween', color: '#f28c18' },
    // { name: 'Garden', value: 'garden', color: '#5c7f67' },
    // { name: 'Forest', value: 'forest', color: '#1eb854' },
    // { name: 'Aqua', value: 'aqua', color: '#09ecf3' },
    // { name: 'Lofi', value: 'lofi', color: '#0d0d0d' },
    // { name: 'Pastel', value: 'pastel', color: '#d1c1d7' },
    // { name: 'Fantasy', value: 'fantasy', color: '#6e0b75' },
    // { name: 'Wireframe', value: 'wireframe', color: '#b8b8b8' },
    // { name: 'Black', value: 'black', color: '#000000' },
    // { name: 'Luxury', value: 'luxury', color: '#09090b' },
    // { name: 'Dracula', value: 'dracula', color: '#282a36' },
    // { name: 'CMYK', value: 'cmyk', color: '#45a1ff' },
    // { name: 'Autumn', value: 'autumn', color: '#8c0327' },
    // { name: 'Business', value: 'business', color: '#1c4e80' },
    // { name: 'Acid', value: 'acid', color: '#ff00aa' },
    // { name: 'Lemonade', value: 'lemonade', color: '#519903' },
    // { name: 'Night', value: 'night', color: '#0f172a' },
    // { name: 'Coffee', value: 'coffee', color: '#db924b' },
    // { name: 'Winter', value: 'winter', color: '#047aed' }
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  changeTheme(theme: string) {
    this.currentTheme = theme;
    this.themeService.setTheme(theme);
  }
}
