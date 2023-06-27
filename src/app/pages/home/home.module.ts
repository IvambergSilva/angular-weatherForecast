import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { BigCardComponent } from 'src/app/components/big-card/big-card.component';

import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from 'src/app/interceptors/loading.interceptor';
import { SmallCardComponent } from 'src/app/components/small-card/small-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoadingComponent,
    BigCardComponent,
    SmallCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ]
})
export class HomeModule { }
