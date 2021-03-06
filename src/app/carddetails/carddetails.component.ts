import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.scss']
})
export class CarddetailsComponent implements OnInit {

  cardNumberInput = '';
  cardNameInput = '';
  cardCVVInput = '';
  expMonth: any = 'Month';
  expYear: any = 'Year';
  months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
  years:any = [];
  cardFlipped = false;

  onCardNumClicked = false;
  onCardNameClicked = false;
  onCardExpClicked = false;
  onCVVClicked = false;

  cardTypeImages = {
    amex: '/assets/images/amex.png',
    dinersclub:'/assets/images/dinersclub.png',
    discover:'/assets/images/discover.png',
    jcb:'/assets/images/jcb.png',
    mastercard:'/assets/images/mastercard.png',
    troy:'/assets/images/troy.png',
    unionpay:'/assets/images/unionpay.png',
    visa:'/assets/images/visa.png'
  }

  cardTypeImage: any = this.cardTypeImages.visa;

  getCardNumber(evt: any){
    this.cardNumberInput = evt.target.value;

    if(this.cardNumberInput == ""){
      this.cardTypeImage = this.cardTypeImages.visa;
    }

    // visa
    var re = new RegExp("^4");
    if (this.cardNumberInput.match(re) != null){
        this.cardTypeImage = this.cardTypeImages.visa;
        return;
    }

    //troy
    // var re = new RegExp("^9");
    if (this.cardNumberInput.match(new RegExp("^9")) != null){
        this.cardTypeImage = this.cardTypeImages.troy;
        return;
    }
    // Mastercard 
    re = new RegExp("^5[1-5][0-9]");
     if (this.cardNumberInput.match(re) != null) 
      this.cardTypeImage = this.cardTypeImages.mastercard;

    // AMEX
    re = new RegExp("^3[47]");
    if (this.cardNumberInput.match(re) != null)
      this.cardTypeImage = this.cardTypeImages.amex;

    // Discover
    re = new RegExp("^(60[0-9])");
    if (this.cardNumberInput.match(re) != null)
      this.cardTypeImage = this.cardTypeImages.discover;

    // Diners
    re = new RegExp("^36");
    if (this.cardNumberInput.match(re) != null)
        this.cardTypeImage = this.cardTypeImages.dinersclub;

    // Diners - Carte Blanche
    re = new RegExp("^30[0-5]");
    if (this.cardNumberInput.match(re) != null)
      this.cardTypeImage = this.cardTypeImages.dinersclub;

    // JCB
    re = new RegExp("^35(2[89]|[3-8][0-9])");
    if (this.cardNumberInput.match(re) != null)
      this.cardTypeImage = this.cardTypeImages.jcb;

    //unionpay
    re = new RegExp("^(62[0-9])")
    if (this.cardNumberInput.match(re) != null)
      this.cardTypeImage = this.cardTypeImages.unionpay;

  }

  getCardName(evt: any){
    this.cardNameInput = evt.target.value;
  }

  getYearInput(){
    this.years = [];
    let todayDate = new Date();
    let year = todayDate.getFullYear();
    for(let i = 0; i<10; i++){
      this.years.push(year + i);
    }
  }

  getCVVInput(evt: any){
    this.cardCVVInput = evt.target.value;
  }

  flipIt() {
    this.cardFlipped = true;
  }

  // getExpMonth(evt: any){
  //   this.expMonth = evt.target.value;
  // }

  
  constructor() { }

  ngOnChanges(changes: SimpleChanges){

    if(changes && changes.cardNumInput && changes.cardNumInput.currentValue){
      if(changes.cardNumInput.currentValue.length == 4){
        changes.cardNumInput.currentValue = changes.cardNumInput.currentValue + " ";
      }
    }
  }

  ngOnInit(): void {
  }

}
