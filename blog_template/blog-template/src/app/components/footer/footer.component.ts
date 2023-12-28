import { Component, OnInit } from '@angular/core';
import { TabView } from 'primeng/tabview';

@Component({
  selector: 'components-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{

  public activeIndex: number = 0;


  constructor(){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
