import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-pays-description',
  templateUrl: './pays-description.component.html',
  styleUrls: ['./pays-description.component.scss'],
})
export class PaysDescriptionComponent implements OnInit {
  name: string;
  currencies: any[];
  nameCurrencie: string;
  id: number;

  constructor(
    private paysService: PaysService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    // Récupére le nom du pays passer en parramétre de pays.component
    this.name = this.router.snapshot.params['unPaysName'];
    console.log(this.paysService.getPaysByName(this.name));

    // Instantiation de la variable currency en récupérant via la pays retournée
    this.currencies = this.paysService.getPaysByName(this.name).currencies;
    console.log(this.currencies);

    // Parcour du tableau currencies afin de récuperer son nom
    for (let currencie of this.currencies) {
      this.nameCurrencie = currencie.name;
    }
  }
}
