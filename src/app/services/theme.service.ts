import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'technote-theme';
  private currentTheme = 'technote'; // Default to custom theme

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.initTheme();
  }

  private initTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Check localStorage for saved theme
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      if (savedTheme && this.getAvailableThemes().includes(savedTheme)) {
        this.currentTheme = savedTheme;
      } else {
        // Check system preference for dark/light, but default to technote theme
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.currentTheme = prefersDark ? 'dark' : 'technote';
      }

      this.applyTheme(this.currentTheme);
    }
  }

  setTheme(theme: string): void {
    // Validate theme exists before setting
    if (!this.getAvailableThemes().includes(theme)) {
      console.warn(`Theme "${theme}" is not available. Using default theme.`);
      theme = 'technote';
    }

    this.currentTheme = theme;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);
      this.applyTheme(theme);
    }
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }

  private applyTheme(theme: string): void {
    if (isPlatformBrowser(this.platformId)) {
      // Apply theme using data-theme attribute
      document.documentElement.setAttribute('data-theme', theme);
      console.log(`Applied theme: ${theme}`);
    }
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  isDarkMode(): boolean {
    return this.currentTheme === 'dark';
  }

  getAvailableThemes(): string[] {
    return [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'technote'
    ];
  }
}
