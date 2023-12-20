import { Component, Output, EventEmitter } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-pages-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];


  constructor(private countryService: CountriesService){}


  public placeHolder: string = '';

  searchByCapital(term: string){


    console.log("Desde ByCapitalPage");
    console.log({ term });

    this.countryService.searchCapital(term)
      .subscribe(countries =>
        {
          this.countries = countries;
        }
      );




  }

}
