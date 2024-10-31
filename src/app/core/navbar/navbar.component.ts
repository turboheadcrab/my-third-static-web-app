import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { TITLE } from './navbar.constant';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly TITLE = TITLE;
}
