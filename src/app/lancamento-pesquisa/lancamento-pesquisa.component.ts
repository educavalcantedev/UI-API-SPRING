import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Teclado', dataVencimento: new Date(2020, 5, 30),
      dataPagamento: null, valor: 100.32, pessoa: 'Ibyte'},
    { tipo: 'RECEITA', descricao: 'Salário', dataVencimento: new Date(2020, 10, 2),
      dataPagamento: null, valor: 10000.32, pessoa: 'Ibyte'},
    { tipo: 'DESPESA', descricao: 'Teclado', dataVencimento: new Date(2020, 6, 1),
      dataPagamento: null, valor: 100.32, pessoa: 'Ibyte'},
    { tipo: 'DESPESA', descricao: 'Teclado', dataVencimento: new Date(2021, 12, 29),
      dataPagamento: null, valor: 100.32, pessoa: 'Ibyte'}
  ];

}
