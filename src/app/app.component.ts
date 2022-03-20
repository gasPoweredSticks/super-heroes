import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showFilter: boolean = true;

  toggleFilter() {
    setTimeout(() => {
      this.showFilter = !this.showFilter;
    }, 200);
  }

  getTableWidth() {
    if (!this.showFilter) {
      return `w-full`;
    } else {
      return `w-9/12 ease-in-out duration-100`;
    }
  }
}
