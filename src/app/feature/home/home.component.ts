import { Component, isDevMode, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
