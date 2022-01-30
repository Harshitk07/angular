import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  isShow = true;
  isShow1 = false;
 
  toggleDisplay() {
    this.isShow = !this.isShow;
    this.isShow1 = !this.isShow1;
  }
}