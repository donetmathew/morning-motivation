import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ParticleComponent } from './particle/particle.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    ParticleComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
