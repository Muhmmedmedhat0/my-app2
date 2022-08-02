import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeapleListComponent } from './peaple-list.component';

describe('PeapleListComponent', () => {
  let component: PeapleListComponent;
  let fixture: ComponentFixture<PeapleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeapleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeapleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
