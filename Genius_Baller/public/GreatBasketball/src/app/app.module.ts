import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WeeklyTrainingComponent } from './weeklyTraining/weeklyTraining.component';
import { PrivateClassComponent } from './privateClass/privateClass.component';
import {BeginnerBasketComponent} from './beginnerBasketball/beginnerBasket.component';
import { WinterCampComponent } from './winter-camp/winter-camp.component';
import { SummerCampComponent } from './summer-camp/summer-camp.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ContactComponent } from './contact/contact.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {DataserviceService} from './dataservice.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ClassesVideosComponent } from './classes-videos/classes-videos.component';
// import {FormsModule} from "@angular/forms";

// const config: SocketIoConfig = { url: 'http://localhost:5000', options: {} };
// registerLocaleData(localeFr, 'fr-FR');
export  function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    AboutComponent,
    WeeklyTrainingComponent,
    PrivateClassComponent,
    BeginnerBasketComponent,
    WinterCampComponent,
    SummerCampComponent,
    ContactComponent,
    ClassesVideosComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule,
        MatFormFieldModule,
        MatSelectModule,
        MatGridListModule,
        SlideshowModule,
        // SocketIoModule.forRoot(config),
        HttpClientModule,
        HttpClientJsonpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        // FormsModule

    ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
