import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  userQuotes = [
    new Quote(1, 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', '-	Martin Fowler', 0, 0, new Date(2021,1,5), 'sam'),
    new Quote(2, 'First, solve the problem. Then, write the code.', '-	John Johnson', 0, 0, new Date(2021,7,10), 'david'),
    new Quote(3, 'AIn order to be irreplaceable, one must always be different.', 'Coco Chanel', 0, 0, new Date(2021,1,14), 'kanyutu'),
    new Quote(4, 'Java is to JavaScript what car is to Carpet.',  'Chris Heilmann', 0, 0, new Date(2021,1,10), 'Weshy'),
    new Quote(5, 'Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.', '-	Dan Salomon', 0, 0, new Date(2021,1,28), 'rose')
  ]

  toogleDetails(index:any){
    this.userQuotes[index].showMeta = !this.userQuotes[index].showMeta
  }

  quoteDelete(isDeleted:any,index:any){
    if (isDeleted){
        this.userQuotes.splice(index,1);
        }
  }

  addNewQuote(quote:any){
    let quotesLength = this.userQuotes.length;
    quote.quoteID=quotesLength+1;
    quote.dateAdded = new Date(quote.completeDate)
    this.userQuotes.push(quote)

  }


  constructor() { }

  ngOnInit() {
  }

}
