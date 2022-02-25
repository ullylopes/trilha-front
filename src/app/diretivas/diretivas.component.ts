import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  showName: boolean = true;

  public color = "violeta";

  toggleName() {
    this.showName = !this.showName;
  }


  people: any[] = [
    {
      "name": "Ully Lopes",
      "country": 'BRA'
    },
    {
      "name": "Felipe Firmino",
      "country": 'ESP'
    },
    {
      "name": "Lucas Oliveira",
      "country": 'USA'

    }
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
