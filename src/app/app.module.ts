import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { HomeComponent } from './home/home.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      DashboardModule,
      RouterModule.forRoot(APP_ROUTES, {
        preloadingStrategy: PreloadAllModules
      })
   ],
   declarations: [
    AppComponent,
    HomeComponent
   ],
   schemas: [
     CUSTOM_ELEMENTS_SCHEMA
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
