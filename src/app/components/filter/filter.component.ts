import { Component } from '@angular/core';
import { CountriesService } from 'src/app/services/countries/countries.service';
import { HeroesService } from 'src/app/services/heroes/heroes.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent {
  heroes: any;
  countries: any;
  filterValue: string = '';
  emailValue: string = '';
  nameValue: string = '';
  phoneValue: string = '';
  companyValue: string = '';
  countryValue: string = '';
  dateValue: string = '';
  query: string = '';

  constructor(
    private countriesService: CountriesService,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.getAllCountires();
  }

  // Get all countires
  getAllCountires(): void {
    this.countriesService.list().subscribe(
      (countries: any) => {
        this.countries = countries;

        console.log('countries', countries);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  filter(): void {
    this.heroesService.filterHeroes(this.filterValue, this.query).subscribe(
      (heroes) => {
        this.heroes = heroes;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
