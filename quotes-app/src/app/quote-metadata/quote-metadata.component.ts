import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-metadata',
  templateUrl: './quote-metadata.component.html',
  styleUrls: ['./quote-metadata.component.css']
})
export class QuoteMetadataComponent implements OnInit {

  @Input()  quote:any;Quote:any;
  @Output() isDeleted = new EventEmitter<boolean>();

  quoteDelete(deleted:boolean){
    this.isDeleted.emit(deleted);
  }

      
    upVoteQuote(){
        this.quote.upVote++;
    }

    downVoteQuote(){
        this.quote.downVote++;
    }

  constructor() { }

  ngOnInit() {
  }

}
