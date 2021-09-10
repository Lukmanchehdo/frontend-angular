import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareService } from '../../ShareService';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accounts:any;

  account = {
    id: null,
    code: null,
    name: null,
  }

  constructor(private http: HttpClient, private shareService: ShareService) { }

  ngOnInit(): void {
    this.loadeAccount();

  }

  loadeAccount() {
    this.http.get(this.shareService.serverPath + '/account/').subscribe((res: any) => {
      this.accounts = res.account
      // console.log(this.students);
    });
  }

  saveAccount() {
    if(this.account.id == null){
      var path = this.shareService.serverPath + '/account/save';
    }else{
      var path = this.shareService.serverPath + '/account/update';
    }

    this.http.post(path, this.account).subscribe((res: any) => {
      this.accounts = res.account

      alert(res.message)
      this.loadeAccount();
      this.account = {
        id: null,
        code: null,
        name: null,
      }
      // console.log(this.students);
    });
  }

  editAccount(item: any) {
    this.account = item;
  }

}
