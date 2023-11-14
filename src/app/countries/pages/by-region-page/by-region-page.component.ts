import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

//se usa types cuando se sabe que no se va a expander


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public regions: Region[] = ['Americas', 'Europe', 'Asia', 'Oceania', 'Africa'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
      this.countries = this.countriesService.cacheStore.byRegion.countries;
      this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region:Region):void{

    this.selectedRegion = region;

    this.countriesService.searchRegion(region)
      .subscribe(countries=>{
        this.countries = countries;

      });
  }
}