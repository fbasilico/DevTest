import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Form,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { CustomerTypes } from "../models/customer-types.enum";
import { CustomersService } from "../customers.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-customer-new",
  templateUrl: "./customer-new.component.html",
  styleUrls: ["./customer-new.component.scss"],
})
export class CustomerNewComponent implements OnInit {
  form: FormGroup;
  customerTypes = CustomerTypes;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      type: new FormControl("", [Validators.required]),
    });
  }

  get controls() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.valid) {
      this.customerService
        .create(this.form.value)
        .then((x) => this.router.navigate(["./customers"]));
    }
  }
}
