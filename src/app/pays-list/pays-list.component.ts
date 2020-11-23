import { Component, OnInit, Input } from '@angular/core';
import { PaysService } from '../services/pays.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PaysDescriptionComponent } from 'src/app/pays-Description/pays-description.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pays-list',
  templateUrl: './pays-list.component.html',
  styleUrls: ['./pays-list.component.scss'],
})
export class PaysListComponent implements OnInit {
  @Input() payName: string;

  constructor(
    private paysService: PaysService,
    private http: HttpClient,
    private router: Router
  ) {}

  pays: any[];
  paysSubscription: Subscription;

  ngOnInit() {
    // this.pays = this.paysService.pays;
    // this.paysName = this.paysService.getPaysName();
    // this.paysService.getPaysFromApi();
    this.paysService.getPaysFromApi();
    this.paysSubscription = this.paysService.paysSubject.subscribe(
      (pays: any[]) => {
        this.pays = pays;
      }
    );
    this.paysService.emitPaysSubject();
    console.log('pays-lste component pays');
    console.log(this.pays);
  }

  getPaysApi() {
    this.paysService.getPaysFromApi();
    console.log('pays-lste component pays');
    console.log(this.pays);
  }

  onSave() {
    this.paysService.savePaysToServer();
  }

  paysDescription() {
    console.log('test changement de page');
  }
}
