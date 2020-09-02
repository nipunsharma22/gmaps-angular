import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsr9LR_o8dWSd5i2rFO1kxdAKXnmolfU4',
      libraries: ['places']
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
