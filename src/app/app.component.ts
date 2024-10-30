import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-third-static-web-app';
  count = signal<number>(0);

  modifyByOne(isAddition: boolean) {
    this.count.update((value) => (isAddition ? value + 1 : value - 1));
  }
}
