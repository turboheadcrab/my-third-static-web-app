import { Component, isDevMode, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  configuration = signal<'development' | 'production' | undefined>(undefined);
  count = signal<number>(0);

  modifyByOne(isAddition: boolean) {
    this.count.update((value: number) => (isAddition ? value + 1 : value - 1));
  }

  constructor() {
    if (isDevMode()) {
      this.configuration.set('development');
    } else {
      this.configuration.set('production');
    }
  }
}
