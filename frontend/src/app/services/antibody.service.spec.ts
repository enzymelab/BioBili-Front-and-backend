import { TestBed } from '@angular/core/testing';

import { AntibodyService } from './antibody.service';

describe('FoodService', () => {
  let service: AntibodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntibodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
