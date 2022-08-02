import { Component, OnInit, QueryList, ElementRef, ContentChildren, ContentChild } from '@angular/core';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }
@ContentChildren('age')ageElement!:ElementRef;
@ContentChild('country')countryElement!:QueryList<ElementRef>;

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    this.countryElement.forEach((c)=>{
      (c.nativeElement as HTMLParagraphElement).style.color='red'
    });
    (this.ageElement.nativeElement as HTMLParagraphElement).style.background='yellow'
    }

  }


