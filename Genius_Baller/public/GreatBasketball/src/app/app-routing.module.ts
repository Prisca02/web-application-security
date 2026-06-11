import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {WeeklyTrainingComponent} from './weeklyTraining/weeklyTraining.component';
import {PrivateClassComponent} from './privateClass/privateClass.component';
import {BeginnerBasketComponent} from './beginnerBasketball/beginnerBasket.component';
import {WinterCampComponent} from './winter-camp/winter-camp.component';
import {SummerCampComponent} from './summer-camp/summer-camp.component';
import {ContactComponent} from './contact/contact.component';
import { ClassesVideosComponent } from './classes-videos/classes-videos.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'weeklyTraining program', component: WeeklyTrainingComponent},
  {path: 'privateClass program', component: PrivateClassComponent},
  {path: 'beginnerBasketball program', component: BeginnerBasketComponent},
  {path: 'winterCamp', component: WinterCampComponent},
  {path: 'summerCamp', component: SummerCampComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'classesVideos', component: ClassesVideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
