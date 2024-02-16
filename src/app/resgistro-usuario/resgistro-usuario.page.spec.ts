import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResgistroUsuarioPage } from './resgistro-usuario.page';

describe('ResgistroUsuarioPage', () => {
  let component: ResgistroUsuarioPage;
  let fixture: ComponentFixture<ResgistroUsuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResgistroUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
