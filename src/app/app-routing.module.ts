import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { WalletComponent } from './components/wallet/wallet.component';

const routes: Routes = [
  { path: '', redirectTo: 'account', pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'transfer', component: TransferComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
