import { TestBed } from '@angular/core/testing';

import { LoderInterceptorInterceptor } from './loder-interceptor.interceptor';

describe('LoderInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoderInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoderInterceptorInterceptor = TestBed.inject(LoderInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
