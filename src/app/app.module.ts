import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaysService } from './services/pays.service';
import { PaysListComponent } from './pays-list/pays-list.component';
import { PaysDescriptionComponent } from './pays-description/pays-description.component';
import { RouterModule, Routes } from '@angular/router';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { PaysComponent } from './pays/pays.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [PaysService],
  bootstrap: [AppComponent],
})
export class AppModule {}
