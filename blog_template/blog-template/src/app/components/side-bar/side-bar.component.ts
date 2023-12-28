import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'components-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor(private primengConfig: PrimeNGConfig) {}

  public visibleSidebar1: boolean = false;
  public visibleSidebar2: boolean = false;
  public visibleSidebar3: boolean = false;
  public visibleSidebar4: boolean = false;
  public visibleSidebar5: boolean = false;


  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
