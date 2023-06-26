import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { WeatherService } from '../services/weather.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = false;

  constructor(
    private weatherService: WeatherService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!this.activeRequests)
      this.weatherService.show()

    this.activeRequests = true

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequests = false
        
        if (!this.activeRequests) 
          this.weatherService.hide()
      })
    );
  }
}
