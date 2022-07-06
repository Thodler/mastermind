import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JetonComponent } from './jeton/jeton.component';
import { RowComponent } from './row/row.component';

@NgModule({
  declarations: [
    AppComponent,
    JetonComponent,
    RowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
