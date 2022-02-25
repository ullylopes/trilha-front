import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  name: string = "Ully Lopes";
  guideName: string = "Felipe Firmino";
  date = new Date;
  team = "Time ?";

  city: string = "São Paulo";
  disable: boolean = false;

  clickedBtn() {
    alert("Botão Clicado!");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
