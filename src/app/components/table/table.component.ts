import { Output, EventEmitter, Component } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'heroes-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  heroes: any;
  searchName: string = '';
  showSearch: boolean = true;

  constructor(private heroesService: HeroesService) {}

  @Output() toggleFilter = new EventEmitter<void>();
  @Output() showFilter = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.getAllHeroes();

    console.log('showFilter', this.showFilter);
  }

  rotateIcon() {
    if (!this.showFilter) {
      return `rotate-0`;
    } else {
      return ``;
    }
  }

  // Toggle search input field
  toggleShowSearch() {
    this.showSearch = !this.showSearch;
  }

  // Get all heroes
  getAllHeroes(): void {
    this.heroesService.list().subscribe(
      (heroes: any) => {
        this.heroes = heroes;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // Search heroes by name
  searchByName(): void {
    this.searchName
      ? this.heroesService.filterHeroes(this.searchName, 'name').subscribe(
          (heroes) => {
            this.heroes = heroes;
          },
          (error) => {
            console.log(error);
          }
        )
      : this.getAllHeroes();
  }
}
