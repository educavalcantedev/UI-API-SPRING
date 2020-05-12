import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent {

  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Teclado', dataVencimento: '30/06/2020',
      dataPagamento: null, valor: 100.32, pessoa: 'Ibyte'},
    { tipo: 'RECEITA', descricao: 'Salário', dataVencimento: '30/06/2020',
      dataPagamento: null, valor: 10000.32, pessoa: 'Ibyte'},
    { tipo: 'DESPESA', descricao: 'Teclado', dataVencimento: '30/06/2020',
      dataPagamento: null, valor: 100.32, pessoa: 'Ibyte'},
    { tipo: 'DESPESA', descricao: 'Teclado', dataVencimento: '30/06/2020',
      dataPagamento: null, valor: 100.32, pessoa: 'Ibyte'}
  ];

}
