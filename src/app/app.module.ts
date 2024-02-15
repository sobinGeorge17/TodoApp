import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { PendingComponent } from './components/pending/pending.component';
import { InprogressComponent } from './components/inprogress/inprogress.component';
import { CompletedComponent } from './components/completed/completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PendingComponent,
    InprogressComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
