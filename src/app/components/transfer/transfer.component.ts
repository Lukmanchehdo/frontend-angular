import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../ShareService';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  accounts: any;
  accounts2: any;
  account2: any;

  transfer = {

  }

  account = {
    sourceaccount_id: null,
    destination_id: null,
  }

  constructor(private http: HttpClient, private shareService: ShareService) { }

  ngOnInit(): void {
    this.loadeAccount();
    this.loadeAccount2();
  }

  loadeAccount() {
    this.http.get(this.shareService.serverPath + '/chooseAccount/').subscribe((res: any) => {
      this.accounts = res.account
    console.log(this.accounts);
    });
  }

  loadeAccount2() {
    this.http.get(this.shareService.serverPath + '/chooseAccount2/').subscribe((res: any) => {
      this.accounts2 = res.account2
    console.log(this.accounts2);
    });
  }

  chooseAccount2(item2: any) {
    this.account.destination_id = item2.name;

    console.log(this.account.destination_id);
  }

  chooseAccount(item: any) {
    this.account.sourceaccount_id = item.name;

    console.log(this.account.sourceaccount_id);
  }

}
