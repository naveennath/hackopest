import { Component, OnInit } from '@angular/core';
import { Expression } from '@angular/compiler';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.page.html',
  styleUrls: ['./trains.page.scss'],
})
export class TrainsPage implements OnInit {
  tname = 'express';
  constructor() { }

  ngOnInit() {
  }

}
