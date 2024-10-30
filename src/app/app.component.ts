import {
  ChangeDetectionStrategy,
  Component,
  isDevMode,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MatCardModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    const testActionSecret = environment.testActionSecret;
    console.info('testActionSecret: ', testActionSecret);
  }
}
