import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class PaysService {
  paysSubject = new Subject<any[]>();

  pays: any[];

  constructor(private httpClient: HttpClient) {}

  //Retourne un pays selon son id
  getPaysById(id: number) {
    const unPays = this.pays.find((paysObject) => {
      return paysObject.id === id;
    });
    return unPays;
  }

  //Retourne un pays selon son nom
  getPaysByName(name: string) {
    const unPays = this.pays.find((paysObject) => {
      return paysObject.name === name;
    });
    return unPays;
  }

  //Retourne la monnaie selon le nom d'un pays
  getCurrencieByName(name: string) {
    const unPays = this.pays.find((paysObject) => {
      if (paysObject.name === name) {
        return paysObject.currencies;
      }
    });
    return unPays;
  }

  getPaysByName2(name: string) {
    const unPays = this.pays.filter((unPays) => unPays.name === name);
    return unPays;
  } // autre moyen de filtrer un tableau

  emitPaysSubject() {
    this.paysSubject.next(this.pays);
  }

  //Recupérer une liste de pays via l'api restcountries
  /**https://projetpays-e6a52.firebaseio.com/pays.json base de donnée perso possiblement plus a jour
   * https://restcountries.eu/rest/v2/all déprécier
   * https://restcountries.com/v3.1/all nouvelle version de l'api, format JSON plus correspondant
   * https://restcountries.com/v2/all semble fonctionner
   */
  getPaysFromApi() {
    this.httpClient
      .get<any[]>('https://projetpays-e6a52.firebaseio.com/pays.json')
      .subscribe(
        (response) => {
          this.pays = response;
          this.emitPaysSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
    console.log('getPaysFromApi');
    console.log(this.pays);
  }

  //Sauvegarde de la liste sur un repo firebase
  savePaysToServer() {
    this.httpClient
      .put('https://projetpays-e6a52.firebaseio.com/pays.json', this.pays)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
