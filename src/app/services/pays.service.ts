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

  getPaysById(id: number) {
    const unPays = this.pays.find((paysObject) => {
      return paysObject.id === id;
    });
    return unPays;
  }

  getPaysByName(name: string) {
    const unPays = this.pays.find((paysObject) => {
      return paysObject.name === name;
    });
    return unPays;
  }

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
    this.paysSubject.next(this.pays.slice());
  }

  getPaysFromApi() {
    this.httpClient
      .get<any[]>('https://restcountries.eu/rest/v2/all')
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
