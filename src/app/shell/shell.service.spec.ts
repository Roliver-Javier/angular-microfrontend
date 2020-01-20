/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShellService } from './shell.service';

describe('Service: Shell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShellService]
    });
  });

  it('should ...', inject([ShellService], (service: ShellService) => {
    expect(service).toBeTruthy();
  }));
});
