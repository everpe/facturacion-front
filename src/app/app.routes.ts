import { Routes } from '@angular/router';
import { ListInvoicesComponent } from './components/list-invoices/list-invoices.component';

export const routes: Routes = [
    { path: 'invoices', component: ListInvoicesComponent },
  { path: '', redirectTo: '/invoices', pathMatch: 'full' }
];
