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
  currency: string;
  id: number;

  constructor(
    private paysService: PaysService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.id = this.router.snapshot.params['id'];
    // this.name = this.paysService.getPaysById(+this.id).name;
    this.name = this.router.snapshot.params['unPaysName'];
    // console.log(this.id + ' ' + this.name);
    console.log(this.name);
    // this.nameP = this.paysService.getPaysByName(name).name;
    console.log(this.paysService.getPaysByName(this.name));
    this.currency = this.paysService.getCurrencieByName(this.name).name;
  }
}
