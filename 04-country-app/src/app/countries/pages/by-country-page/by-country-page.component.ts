import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-pages-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public placeHolder: string = '';
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private countryService: CountriesService){}

  ngOnInit(): void {
    if(localStorage.getItem('countries')){
      this.countries = JSON.parse(localStorage.getItem('countries') || '');
    }
  }

  searchByCountry(term: string){

    this.isLoading = true;
    console.log("Desde ByCountryPage");
    console.log({ term });

    this.countryService.searchGeneric('name',term)
    .subscribe(countries =>
      {
        this.isLoading = false;
        this.countries = countries;
        localStorage.setItem('countries',JSON.stringify(this.countries));
      }
    );



  }

}





