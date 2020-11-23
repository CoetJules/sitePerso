import { Component, OnInit, Input } from '@angular/core';
import { PaysService } from '../services/pays.service';

@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.scss'],
})
export class PaysComponent implements OnInit {
  @Input() unPaysName: string;
  @Input() id: number;

  constructor(private paysService: PaysService) {}

  ngOnInit() {}
}
