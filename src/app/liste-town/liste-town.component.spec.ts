import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTownComponent } from './liste-town.component';

describe('ListeTownComponent', () => {
  let component: ListeTownComponent;
  let fixture: ComponentFixture<ListeTownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeTownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
