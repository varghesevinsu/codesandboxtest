import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'deptest';
  text: string = '';

  results: any = ["one", "two"];

  search(e: any) {

  }
}
