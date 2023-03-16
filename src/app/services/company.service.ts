import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable, tap } from 'rxjs';
import { AppState } from '../_helpers/AppState';
import { CompanyDetail } from '../_models/company';

const API_URL = AppState.config.APIBaseURL;

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);
  
  constructor(private http: HttpClient) { }

  ShowHideSpinner(value:boolean){
    this.showSpinner.next(value);
  }

  LoadDropDownForRegistration(): Observable<any> {
    const url = API_URL + "Common/LoadDropDownForRegistration";
    return this.http.get<any>(`${url}`).pipe(
      tap(_ => {})
      )
  }

  GetAllState(): Observable<any[]> {
    const url = API_URL + "Common/GetAllState";
    return this.http.get<any[]>(`${url}`).pipe(
      tap(_ => {})
      )
  }


  RegisterCompany(company:CompanyDetail): Observable<any> {
    const url = API_URL + "Company/RegisterCompany";
    return this.http.post<CompanyDetail>(`${url}`,company).pipe(
      tap(_ => {})
      )
  }

  SendEmail(sendmessage:any): Observable<any> {
    const url = API_URL + "Common/SendAnonymousEmail";
    return this.http.post<CompanyDetail>(`${url}`,sendmessage).pipe(
      tap(_ => {})
      )
  }

  // GetSalesDetail(orderid,customerid,saletypeid,saleprefixid,rowkey): Observable<any> {
  //   const url = API_URL + "Sales/GetInvoiceDetail?orderid="+orderid+"&customerid="+customerid+"&SaleTypeId="+saletypeid+"&salePrefixId="+saleprefixid+"&rowKey="+rowkey;
  //   return this.http.get<any>(`${url}`).pipe(
  //     tap(_ => {})
  //     )
  // }

  // GeneratePDFByOrder(data): Observable<OrderSavedResponse> {
  //   const url = API_URL + "Sales/GeneratePDFByOrder";
  //   return this.http.post<OrderSavedResponse>(`${url}`,data).pipe(
  //     tap(_ => {})
  //     )
  // }

  // DeleteOrder(OrderId:number,rowKey:string): Observable<any> {
  //   const url = API_URL + "Sales/DeleteOrder?OrderId="+OrderId+"&rowKey="+rowKey;
  //   return this.http.post<any>(`${url}`,null).pipe(
  //     tap(_ => {})
  //     )
  // }


  // SaveSalesOrder(salesorder:any): Observable<any> {
  //   const url = API_URL + "Sales/SaveSalesOrder";
  //   return this.http.post<any>(`${url}`,salesorder).pipe(
  //     tap(_ => {})
  //     )
  // }
}
