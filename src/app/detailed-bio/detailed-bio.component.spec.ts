import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedBioComponent } from './detailed-bio.component';

describe('DetailedBioComponent', () => {
  let component: DetailedBioComponent;
  let fixture: ComponentFixture<DetailedBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
