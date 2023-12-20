import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @ViewChild('txtSearchInput')
    public tagInput!: ElementRef<HTMLInputElement>

  @Input()
   public placeholder: string = '';

  @Output()
   public onValue: EventEmitter<string> = new EventEmitter<string>();

   emitValue(value: string): void {

   this.onValue.emit(value);

  }

}









