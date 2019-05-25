import { TestBed } from '@angular/core/testing';

import { CharactersApiService } from './characters-api.service';

describe('CharactersApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharactersApiService = TestBed.get(CharactersApiService);
    expect(service).toBeTruthy();
  });
});
