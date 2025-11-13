import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';

@Component({ //decorator
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet> <!-- home being rendered from here -->
    </main>
  `,
  styles: [`
      main {
        padding: 16px;
      }
    `],
})
export class App {
  protected readonly title = signal('first-ng-app');
}
