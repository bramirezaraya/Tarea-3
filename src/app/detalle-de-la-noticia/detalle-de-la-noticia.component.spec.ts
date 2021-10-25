import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeLaNoticiaComponent } from './detalle-de-la-noticia.component';

describe('DetalleDeLaNoticiaComponent', () => {
  let component: DetalleDeLaNoticiaComponent;
  let fixture: ComponentFixture<DetalleDeLaNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleDeLaNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeLaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
