import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})
export class SuportePage implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  voltar(){
    this._router.navigate(['login']); //Ir para tela-sobre
  }

}
