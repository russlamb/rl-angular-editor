import { Injectable } from '@angular/core';
import {Account} from './account';
import {ACCOUNTS} from './mock-accounts';

@Injectable()
export class AccountService {
  getItems():Account[] { // return mock data from file
    return this.accounts;
  } 
  insertItem(account:Account):void {
    let maxID = Math.max.apply(Math, this.accounts.map(function(o) {return o.ExtID}))
    let newAccount = new Account();
    newAccount.ExtID = maxID+1;
    newAccount.AcctNum = account.AcctNum;
    newAccount.AcctName = account.AcctName;
    newAccount.CstAcct = account.CstAcct;
    this.accounts.push(newAccount);
  }
  deleteItem(account:Account):void{
    console.log({"delete account":account});
    // get index of item to delete by matching on AccountID
    let indexOfItemToDelete = this.accounts.map(e=>e.ExtID).indexOf(account.ExtID); 
    //remove item
    this.accounts.splice(indexOfItemToDelete,1);
  }
  updateItem(account:Account):void{
    console.log({"update account":account});
    let indexOfItemToUpdate = this.accounts.map(e=>e.ExtID).indexOf(account.ExtID); 
    // update item
    this.accounts.splice(indexOfItemToUpdate,1,account);
  }
  accounts:Account[];
  constructor() { this.init() }

  init():void {
    this.accounts= ACCOUNTS;
  }  

}
