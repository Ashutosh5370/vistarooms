import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LuxuryComponent } from './components/luxury/luxury.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { OurFeaturedHomesComponent } from './components/our-featured-homes/our-featured-homes.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { SearchHomesComponent } from './components/search-homes/search-homes.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    NavbarComponent,
    LuxuryComponent,
    WhyChooseUsComponent,
    OurFeaturedHomesComponent,
    ImageSliderComponent,
    SearchHomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LazyLoadImageModule,
    FontAwesomeModule,
    NgxSpinnerModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
