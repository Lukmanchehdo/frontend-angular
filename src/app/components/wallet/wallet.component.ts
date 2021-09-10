import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../ShareService';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  wallets: any;
  accounts: any;

  wallet= {
    id: null,
    reference_code: null,
    channel: null,
    account_id: null,
    amount: null,
  };

  constructor(private http: HttpClient, private shareService: ShareService) { }

  ngOnInit(): void {
    this.loadewallet();
    this.loadeAccount();
  }

  loadewallet() {
    this.http.get(this.shareService.serverPath + '/wallet/').subscribe((res: any) => {
      this.wallets = res.wallet
      // console.log(this.students);
    });
  }

  loadeAccount() {
    this.http.get(this.shareService.serverPath + '/account/').subscribe((res: any) => {
      this.accounts = res.account
      // console.log(this.students);
    });
  }

  saveWallet() {
    if(this.wallet.id == null){
      var path = this.shareService.serverPath + '/wallet/save';
    }else{
      var path = this.shareService.serverPath + '/wallet/update';
    }

    this.http.post(path, this.wallet).subscribe((res: any) => {
      this.wallets = res.wallet

      alert(res.message)
      this.loadewallet();
      this.wallet = {
        id: null,
        reference_code: null,
        channel: null,
        account_id: null,
        amount: null,
      };
      //console.log(this.wallet);
    });
  }

}
