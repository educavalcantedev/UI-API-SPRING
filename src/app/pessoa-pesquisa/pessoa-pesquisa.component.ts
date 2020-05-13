import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent {

  pessoas = [
    { nome: 'João', ativo: true },
    { nome: 'Maria', ativo: false },
    { nome: 'José', ativo: true },
    { nome: 'Carlos', ativo: true }
  ];

}
