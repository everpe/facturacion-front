import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FacturaService } from '../../services/factura.service';
import { InvoiceDto } from '../../Dto/FacturaDto';
import { AddInvoiceComponent } from '../add-invoice/add-invoice.component';
import { EditInvoiceComponent } from '../edit-invoice/edit-invoice.component';
@Component({
  selector: 'app-list-invoices',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatToolbarModule
  ],
  templateUrl: './list-invoices.component.html',
  styleUrl: './list-invoices.component.css'
})
export class ListInvoicesComponent {
  invoices: InvoiceDto[] = [];

  constructor(private facturaService: FacturaService, public dialog: MatDialog) { }      

  ngOnInit(): void {
    this.getListInvoices();
  }

  getListInvoices() {
    this.facturaService.getInvoices().subscribe(data => {
      this.invoices = data;
      console.log(data);
    });
  }

  openAddInvoiceModal(): void {
    const dialogRef = this.dialog.open(AddInvoiceComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.facturaService.createInvoice(result).subscribe(() => {
          this.getListInvoices();
        });
      }
    });
  }

  openEditInvoiceModal(invoice: InvoiceDto): void {
    console.log(invoice.InvoiceId);
    const dialogRef = this.dialog.open(EditInvoiceComponent, {
      width: '400px',
      data: invoice
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.facturaService.updateInvoice(result).subscribe(() => {
          this.getListInvoices();
        });
      }
    });
  }

  deleteInvoice(id: number): void {
    if (confirm("Are you sure you want to delete this invoice?")) {
      this.facturaService.deleteInvoice(id).subscribe(() => {
        this.getListInvoices();
      });
    }
  }
}
