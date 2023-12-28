import { Component } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';


@Component({
  selector: 'components-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.css'
})
export class CarrouselComponent {

  products: any[] = [];
  public responsiveOptions: CarouselResponsiveOptions[] = [];



getSeverity(severity: string):string {

  let pseverity: string = "severity";

  console.log(severity);

  return pseverity;


}

}
