import { Observable, of } from "rxjs";
import { Customer } from "./models/customer.model";

const data: Customer[] = [
  { id: 2, type: 1, name: "Test-1" },
  { id: 3, type: 4, name: "Test-1" },
];

export class CustomersServiceMock {
  constructor() {}

  public getAll(): Observable<Customer[]> {
    return of(data);
  }

  public getById(id: number): Observable<Customer> {
    return of(data.find((x) => x.id === id));
  }

  public create(customer: Customer): Promise<object> {
    return Promise.resolve({});
  }
}
