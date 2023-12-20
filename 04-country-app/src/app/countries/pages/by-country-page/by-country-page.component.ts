import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-pages-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public placeHolder: string = '';
  public countries: Country[] = [];

  constructor(private countryService: CountriesService){}

  searchByCountry(term: string){


    console.log("Desde ByCountryPage");
    console.log({ term });

    this.countryService.searchName(term)
    .subscribe(countries =>
      {
        this.countries = countries;
      }
    );



  }

}





