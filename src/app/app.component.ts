import { Component } from '@angular/core';
import { SharedLibraryService } from 'ngx-anomali-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public shared: SharedLibraryService) {}
  title = 'angular-ssr';
}
