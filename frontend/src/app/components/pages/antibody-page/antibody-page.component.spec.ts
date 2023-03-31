import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntibodyPageComponent } from './antibody-page.component';

describe('AntibodyPageComponent', () => {
  let component: AntibodyPageComponent;
  let fixture: ComponentFixture<AntibodyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntibodyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntibodyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
