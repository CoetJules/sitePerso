import { Component, OnInit, Input } from '@angular/core';
import { PaysService } from '../services/pays.service';
import { Subscription } from 'rxjs';

// Ce component affiche chaque élement qui se trouve dans la liste
@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss'],
})
export class PaysComponent implements OnInit {
  @Input() unPaysName: string;
  @Input() id: number;
  @Input() currencies: any[];

  constructor(private paysService: PaysService) {}

  ngOnInit() {}
}
