import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceDto, SummaryByCityDto } from '../Dto/FacturaDto';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private apiUrl = 'https://localhost:7256/api/Factura'; // Cambia esto según la URL de tu API

  constructor(private http: HttpClient) { }

  getInvoices(): Observable<InvoiceDto[]> {
    return this.http.get<InvoiceDto[]>(`${this.apiUrl}/GetInvoices`);
  }

  createInvoice(invoice: InvoiceDto): Observable<InvoiceDto> {
    return this.http.post<InvoiceDto>(`${this.apiUrl}/CreateNewInvoice`, invoice);
  }

  updateInvoice(invoice: InvoiceDto): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/UpdateInvoice`, invoice);
  }

  deleteInvoice(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/DeleteInvoice/${id}`);
  }

  getSummaryByCity(): Observable<SummaryByCityDto[]> {
    return this.http.get<SummaryByCityDto[]>(`${this.apiUrl}/GetSummaryInvoicesByCity`);
  }
}
