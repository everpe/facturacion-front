export interface InvoiceDto {
    InvoiceId: number;
    Number: number;
    City: string;
    NameProduct: string;
    Value: number;
  }

  
  export interface SummaryByCityDto {
    City: string;
    TotalSold: number;
  }