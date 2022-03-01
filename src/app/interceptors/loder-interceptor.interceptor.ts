import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoderInterceptorInterceptor implements HttpInterceptor {

  constructor(private LoaderService :LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.LoaderService.showLoader();
    return next.handle(request).pipe(
      finalize(() => this.LoaderService.hideLoading()),
    );
  }
}
