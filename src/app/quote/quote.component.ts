import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1, 'Soaring for the greater heights', 'it is our responsibility as humanbeings', 0, 0, new Date(2020, 6, 21)),
    new Quotes(2, 'No human is limited', 'Greatness is very important in our daily lives', 0, 0, new Date(2002, 8.13)),
  ];
  showdetail(index: any) {
    this.quotes[index].showdescription = !this.quotes[index].showdescription;

  }
  deleteQuote(iscomplete: any, index: any) {
    if (iscomplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
