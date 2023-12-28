import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit, OnDestroy{



  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @ViewChild('txtSearchInput')
    public tagInput!: ElementRef<HTMLInputElement>

  @Input()
   public placeholder: string = '';
  @Input()
   public initialValue: string = '';

  @Output()
   public onValue: EventEmitter<string> = new EventEmitter<string>();

   @Output()
   public onDebounce: EventEmitter<string> = new EventEmitter<string>();


   ngOnInit(): void {
      this.debouncerSuscription = this.debouncer
      .pipe(
          debounceTime(1000)
      )
      .subscribe(value => {

        this.onDebounce.emit(value);

      })
   }

   ngOnDestroy(): void {
    console.log('destruido debouncer');
    this.debouncerSuscription?.unsubscribe();

  }


   emitValue(value: string): void {

   this.onValue.emit(value);

  }

  onKeyPress( searchTerm: string): void{

    this.debouncer.next(searchTerm);


  }

}









