import { Component, OnInit } from "@angular/core";
import { CustomersService } from "../customers.service";
import { Observable } from "rxjs";
import { Customer } from "../models/customer.model";
import { ActivatedRoute } from "@angular/router";
import { switchMap, tap, map, finalize } from "rxjs/operators";

@Component({
  selector: "app-customer-detail",
  templateUrl: "./customer-detail.component.html",
  styleUrls: ["./customer-detail.component.scss"],
})
export class CustomerDetailComponent implements OnInit {
  customer$: Observable<Customer>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomersService
  ) {
    this.customer$ = this.activatedRoute.params.pipe(
      map((params) => params["id"] as string),
      switchMap((customerId) => this.customerService.getById(+customerId))
    );
  }

  ngOnInit() {}
}
