import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-invoice',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.css'
})
export class AddInvoiceComponent {
  invoiceForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddInvoiceComponent>,
    private fb: FormBuilder
  ) {
    this.invoiceForm = this.fb.group({
      Number: ['', Validators.required],
      City: ['', Validators.required],
      NameProduct: ['', Validators.required],
      Value: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.invoiceForm.valid) {
      this.dialogRef.close(this.invoiceForm.value);
    }
  }
}
