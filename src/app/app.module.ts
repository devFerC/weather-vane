import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import necessary application-specific modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
   // Modules to import into this module (NgModule). Gives access to necessary features like Http, Forms, etc.
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
