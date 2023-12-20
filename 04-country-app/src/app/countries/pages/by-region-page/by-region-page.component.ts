import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-pages-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public placeHolder: string = '';
  public countries: Country[] = [];

  constructor(private countryService: CountriesService){}

  searchByRegion(term: string){


    console.log("Desde ByRegionPage");
    console.log({ term });

    this.countryService.searchRegion(term)
      .subscribe(countries =>
        {
          this.countries = countries;
        }
      );



  }

}




