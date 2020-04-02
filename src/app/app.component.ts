import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'webbangiay';
  name: string;
  search () {
    this.router.navigate(['/product-list', 0, this.name, 0, 0);
  }
}
