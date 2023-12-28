import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'components-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  public items: MenuItem[] = [];

}
