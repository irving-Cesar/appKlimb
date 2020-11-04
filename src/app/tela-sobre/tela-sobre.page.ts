import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-sobre',
  templateUrl: './tela-sobre.page.html',
  styleUrls: ['./tela-sobre.page.scss'],
})
export class TelaSobrePage implements OnInit {

  constructor(private router : Router) { }

  Voltar(){
    this.router.navigate(['/login'])
  }

  ngOnInit(){
    
  }

}