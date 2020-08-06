import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersComponent } from "./customers.component";
import { CustomersService } from "./customers.service";
import { CustomersServiceMock } from "./customers.service.mock";
import { CustomerNewComponent } from "./customer-new/customer-new.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerDetailComponent,
    CustomerNewComponent,
  ],
  imports: [CommonModule, CustomersRoutingModule, ReactiveFormsModule],
  providers: [
    // { provide: CustomersService, useClass: CustomersServiceMock }
    CustomersService
    ],
})
export class CustomersModule {}
