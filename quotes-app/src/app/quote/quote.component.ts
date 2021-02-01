import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  userQuotes = [
    new Quote(1, ' The only place where success comes before work is in the dictionary.', '-	Vidal Sassoon', 0, 0, new Date(2021,1,27), 'Rix'),
    new Quote(2, 'The pessimist sees difficulty in every opportunity.The optimist sees opportunity in every difficulty.', '-	Winston Churchill', 0, 0, new Date(2021,2,1), 'Celine'),
    new Quote(3, 'Do not let yesterday take up too much of today.', 'Will Rogers', 0, 0, new Date(2021,3,5), 'Esther'),
    new Quote(4, 'Simplicity is the soul of efficiency.',  'Austin Freeman', 0, 0, new Date(2021,1,1), 'David'),
    new Quote(5, 'The best thing about the future is that it comes one day at a time.', '-	Abraham Licoln', 0, 0, new Date(2021,1,2), 'Felix')
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
