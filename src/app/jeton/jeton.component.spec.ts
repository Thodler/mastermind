import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JetonComponent } from './jeton.component';

describe('ColorComponent', () => {
  let component: JetonComponent;
  let fixture: ComponentFixture<JetonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JetonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JetonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
