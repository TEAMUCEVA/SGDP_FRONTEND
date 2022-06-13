import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarproyectoComponent } from './listarproyecto.component';

describe('ListarproyectoComponent', () => {
  let component: ListarproyectoComponent;
  let fixture: ComponentFixture<ListarproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
