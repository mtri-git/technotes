import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './components/theme-switcher.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule, ThemeSwitcherComponent],
  templateUrl: './app.html',
})
export class App {
  protected title = 'TechNote - Technology Documentation Hub';
}
