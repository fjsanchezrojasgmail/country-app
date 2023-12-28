import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-pages-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{




  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';


  constructor(private countryService: CountriesService){}


  ngOnInit(): void {

    // if(localStorage.getItem('countries')){
    //   this.countries = JSON.parse(localStorage.getItem('countries') || '');
    // }
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;

  }




  public placeHolder: string = '';

  searchByCapital(term: string){

    this.isLoading = true;
    console.log("Desde ByCapitalPage");
    console.log({ term });

    this.countryService.searchGeneric('capital',term)
      .subscribe(countries =>
        {
          this.countries = countries;
          // localStorage.setItem('countries',JSON.stringify(this.countries));
          this.isLoading = false;
        }
      );




  }

}
