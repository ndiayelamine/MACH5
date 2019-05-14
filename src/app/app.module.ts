import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ConcertiService } from './services/concerti.service';
import { FormsModule } from '@angular/forms';
import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GrouppoComponent } from './components/grouppo/grouppo.component';
import { FotoComponent } from './components/foto/foto.component';
import { VideoComponent } from './components/video/video.component';
import { ConcertiComponent } from './components/concerti/concerti.component';
import { ContattaciComponent } from './components/contattaci/contattaci.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // {path: 'home', component: HomeComponent},
  { path: 'gruppo', component: GrouppoComponent },
  { path: 'foto', component: FotoComponent },
  { path: 'video', component: VideoComponent },
  { path: 'concerti', component: ConcertiComponent },
  { path: 'contattaci', component: ContattaciComponent },
  { path: 'gruppo#demo1', component: GrouppoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GrouppoComponent,
    FotoComponent,
    VideoComponent,
    ConcertiComponent,
    ContattaciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConcertiService, { provide: LOCALE_ID, useValue: 'it-IT' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
