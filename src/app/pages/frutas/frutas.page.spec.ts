import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrutasPage } from './frutas.page';

describe('FrutasPage', () => {
  let component: FrutasPage;
  let fixture: ComponentFixture<FrutasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
