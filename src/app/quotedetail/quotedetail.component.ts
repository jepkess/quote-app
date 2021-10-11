import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.component.html',
  styleUrls: ['./quotedetail.component.css']
})
export class QuotedetailComponent implements OnInit {

  @Input() quote: Quotes;
  // isComplete: any;
  @Output() iscomplete=new EventEmitter<boolean>();


  Upvote() {
    this.quote.like++;
  }
  Downvote() {
    this.quote.dislike++;
  }
  deleteQuote(complete: boolean) {
    this.iscomplete.emit(complete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
