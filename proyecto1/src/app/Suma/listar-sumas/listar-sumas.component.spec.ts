import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSumasComponent } from './listar-sumas.component';

describe('ListarSumasComponent', () => {
  let component: ListarSumasComponent;
  let fixture: ComponentFixture<ListarSumasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSumasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSumasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
