import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { ListeTownComponent } from './liste-town/liste-town.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    ListeTownComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiGDkS4CdsBAYZvm9JZfUVBMRqoISNffA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
