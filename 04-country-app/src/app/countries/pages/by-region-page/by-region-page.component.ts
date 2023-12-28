import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'countries-pages-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public placeHolder: string = '';
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?: Region;

  constructor(private countryService: CountriesService){}

  ngOnInit(): void {
    if(localStorage.getItem('countries')){
      this.countries = JSON.parse(localStorage.getItem('countries') || '');
    }
  }

  searchByRegion(term: Region): void{

    this.selectedRegion = term;
    this.isLoading = true;
    console.log("Desde ByRegionPage");
    console.log({ term });

    this.countryService.searchGeneric('region',term)
      .subscribe(countries =>
        {
          this.isLoading = false;
          this.countries = countries;
          localStorage.setItem('countries',JSON.stringify(this.countries));
        }
      );



  }

}




