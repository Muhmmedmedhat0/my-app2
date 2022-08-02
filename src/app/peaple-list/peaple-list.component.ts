import { Component, ElementRef, OnInit,SimpleChange,SimpleChanges,ViewChild } from '@angular/core';

@Component({
  selector: 'peaple-list',
  templateUrl: './peaple-list.component.html',
  styleUrls: ['./peaple-list.component.css']
})
export class PeapleListComponent implements OnInit {

people: any[]=[{"name":"Douglas Pace","age":35,"country":"MARS"},
{"name":"Mcleod Mueller","age":32,"country":"USA"},{"name":"Day Meyers","age":21,"country":"HK"},
{"name":"Aguirre Ellis","age":34,"country":"UK"},
{"name":"Cook Tysons","age":32,"country":"USA"}];

@ViewChild('div') divElement! :ElementRef;

  constructor() {console.log('construct') }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(change:SimpleChanges): void {console.log('ngOnChanges')
  };
  ngAfterContentInit(): void {console.log('ngAfterContentInit')}

  ngAfterContentInitChecked(): void {console.log('ngAfterContentInitChecked')}
  ngAfterViewInit(): void {(this.divElement.nativeElement as HTMLDivElement).innerHTML="helloEveryOne helloEveryOne helloEveryOne"}
  ngAfterViewChecked(): void {console.log('ngAfterViewChecked')}
  ngOnDestroy(): void {console.log('ngOnDestroy')}
 

}
