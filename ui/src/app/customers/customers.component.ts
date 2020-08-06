import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { CustomersService } from "./customers.service";
import { Customer } from "./models/customer.model";

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.scss"],
})
export class CustomersComponent {
  customers$: Observable<Customer[]>;

  constructor(private customersService: CustomersService) {
    this.customers$ = customersService.getAll();
  }
}
