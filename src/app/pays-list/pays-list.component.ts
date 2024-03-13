import { Component, OnInit, Input } from '@angular/core';
import { PaysService } from '../services/pays.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

// Ce component affiche la liste
@Component({
  selector: 'app-pays-list',
  templateUrl: './pays-list.component.html',
  styleUrls: ['./pays-list.component.scss'],
})
export class PaysListComponent implements OnInit {
  @Input() payName: string;
  name: string;

  constructor(
    private paysService: PaysService,
    private http: HttpClient,
    private router: Router
  ) {}

  pays: any[];
  paysSubscription: Subscription;
  searchText;

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

  //Fontion qui permet de faire une recherche sur la liste des pays selon son nom passer en paramétre récupérer via l'input dans le component
  Search() {
    //console.log('Recherche : ' + this.name);
    if (this.name != '') {
      //this.pays -> la liste des pays
      //res -> le pays correspondant a la recherche
      this.pays = this.pays.filter((res) => {
        // console.log(
        //   'Recherche resultat : ' +
        //     res.name.toLowerCase().match(this.name.toLowerCase())
        // );
        console.log(
          'Recherche resultat dan filter : ' + res.name.match(this.name)
        );
        return res.name.toLowerCase().match(this.name.toLowerCase());
      });
    } else if (this.name == '') {
      this.ngOnInit();
    }
  }

  //Permet de récupérer une liste de tout les pays via une api
  getPaysApi() {
    this.paysService.getPaysFromApi();
    console.log('pays-lste component pays');
    console.log(this.pays);
  }

  //Permet de sauvegarder la liste dans une bdd firebase
  onSave() {
    this.paysService.savePaysToServer();
  }

  paysDescription() {
    console.log('test changement de page');
  }
}
