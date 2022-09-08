import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component'; //Component principal
import { PaysService } from './services/pays.service'; //Service
import { PaysListComponent } from './pays-list/pays-list.component'; //Component contenant la liste des pays
import { PaysDescriptionComponent } from './pays-description/pays-description.component'; //Component de la page detail
import { RouterModule, Routes } from '@angular/router'; //Route pour changer de page
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { PaysComponent } from './pays/pays.component';
import { FilterPipePipe } from './pipe/filter-pipe.pipe'; //Pipe filtre
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'paysList', component: PaysListComponent },
  { path: 'paysList/:unPaysName', component: PaysDescriptionComponent },
  { path: ':unPaysName', component: PaysDescriptionComponent },
  { path: 'paysDesc', component: PaysDescriptionComponent },
  { path: '', component: PaysListComponent },
  // { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    PaysListComponent,
    PaysDescriptionComponent,
    AppareilViewComponent,
    PaysComponent,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    ScrollingModule,
  ],
  providers: [PaysService],
  bootstrap: [AppComponent],
})
export class AppModule {}
