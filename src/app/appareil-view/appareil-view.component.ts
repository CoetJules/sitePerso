import { Component, Input, OnInit } from '@angular/core';
import { PaysService } from '../services/pays.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss'],
})
export class AppareilViewComponent implements OnInit {
  @Input() payName: string;

  constructor(
    private paysService: PaysService,
    private http: HttpClient,
    private router: Router
  ) {}

  pays: any[];

  ngOnInit() {
    this.pays = this.paysService.pays;
  }
}
