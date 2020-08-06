import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "./models/customer.model";
import { Observable } from "rxjs";

@Injectable()
export class CustomersService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:63235/customer");
  }

  public getById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(
      `http://localhost:63235/customer/${id}`
    );
  }

  public create(customer: Customer): Promise<object> {
    return this.httpClient
      .post("http://localhost:63235/customer", customer)
      .toPromise();
  }
}
