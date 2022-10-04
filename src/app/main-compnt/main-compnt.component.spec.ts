import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompntComponent } from './main-compnt.component';

describe('MainCompntComponent', () => {
  let component: MainCompntComponent;
  let fixture: ComponentFixture<MainCompntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCompntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCompntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
