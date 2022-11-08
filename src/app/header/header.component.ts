import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  nav1= "inicio";
  nav2="Descripción";
  nav3="Información General";
  nav4="Perfil Profesional";
  constructor() { }

  ngOnInit(): void {
  }

}
