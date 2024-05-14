import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InvoiceDto } from '../../Dto/FacturaDto';

@Component({
  selector: 'app-edit-invoice',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.css'
})
export class EditInvoiceComponent {
  invoiceForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditInvoiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InvoiceDto,
    private fb: FormBuilder
  ) {
    this.invoiceForm = this.fb.group({
      InvoiceId: [data.InvoiceId],
      Number: [data.Number, Validators.required],
      City: [data.City, Validators.required],
      NameProduct: [data.NameProduct, Validators.required],
      Value: [data.Value, [Validators.required, Validators.min(0)]]
    });
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      this.dialogRef.close(this.invoiceForm.value);
    }
  }
}
