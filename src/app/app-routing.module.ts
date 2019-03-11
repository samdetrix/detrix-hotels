import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { FoodAndBeverageComponent } from './accomodation/food-and-beverage/food-and-beverage.component';
import { WelnessAndSpurComponent } from './lifestyle/welness-and-spur/welness-and-spur.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { TraditionalWeddingsComponent } from './weddings/traditional-weddings/traditional-weddings.component';
import { ModernWeddingsComponent } from './weddings/modern-weddings/modern-weddings.component';
import { RestaurantComponent } from './accomodation/food-and-beverage/restaurant/restaurant.component';
import { BarsComponent } from './accomodation/food-and-beverage/bars/bars.component';
import { ExcursionComponent } from './lifestyle/excursion/excursion.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { HomeComponent } from './home/home.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
  {path: 'accomodation', component: AccomodationComponent},
  {path: 'celebrations', component: CelebrationsComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'lifestyle', component: LifestyleComponent },
  {path: 'weddings', component: WeddingsComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'food-and-beverage', component: FoodAndBeverageComponent},
  {path: 'welness-and-spur', component: WelnessAndSpurComponent},
  {path: 'resort-activities', component: ResortActivitiesComponent},
  {path: 'experiences', component: ExperiencesComponent},
  {path: 'traditional-weddings', component: TraditionalWeddingsComponent},
  {path: 'modern-weddings', component: ModernWeddingsComponent},
  {path: 'restaurant', component:RestaurantComponent},
  {path: 'bars', component:BarsComponent},
  {path: 'excursions', component: ExcursionComponent},
  {path: 'more', component:MoreComponent},
  {path: '' , component:HomeComponent},
  {path:'home', redirectTo:'', pathMatch:'full'}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
