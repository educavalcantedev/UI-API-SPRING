import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
