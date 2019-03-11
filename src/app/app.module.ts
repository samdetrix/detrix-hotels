import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodAndBeverageComponent } from './accomodation/food-and-beverage/food-and-beverage.component';
import { BarsComponent } from './accomodation/food-and-beverage/bars/bars.component';
import { RestaurantComponent } from './accomodation/food-and-beverage/restaurant/restaurant.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WelnessAndSpurComponent } from './lifestyle/welness-and-spur/welness-and-spur.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionComponent } from './lifestyle/excursion/excursion.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { TraditionalWeddingsComponent } from './weddings/traditional-weddings/traditional-weddings.component';
import { ModernWeddingsComponent } from './weddings/modern-weddings/modern-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { MoreComponent } from './more/more.component';
import { MatButtonModule, MatDatepickerModule, MatFormFieldModule,
         MatBadgeModule, MatToolbarModule, MatSidenavModule, MatTableModule,
         MatIconModule, MatListModule, MatTabsModule, MatInputModule, MatSelectModule, MatCardModule, MatProgressSpinnerModule, MatMenuModule, MatSortModule, MatExpansionModule, MatTreeModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodAndBeverageComponent,
    BarsComponent,
    RestaurantComponent,
    LifestyleComponent,
    WelnessAndSpurComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionComponent,
    WeddingsComponent,
    TraditionalWeddingsComponent,
    ModernWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent,
    MoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatFormFieldModule,
    MatButtonModule, MatDatepickerModule,
    MatBadgeModule,MatFormFieldModule,
    MatButtonModule, MatToolbarModule,
    MatSidenavModule, MatIconModule,
    MatListModule,MatTabsModule,
    MatInputModule, MatSelectModule,
    MatDatepickerModule, FlexLayoutModule,MatTreeModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,MatExpansionModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
