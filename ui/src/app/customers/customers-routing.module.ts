import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";
import { CustomersComponent } from "./customers.component";
import { CustomerNewComponent } from "./customer-new/customer-new.component";

const routes: Routes = [
  {
    path: "",
    component: CustomersComponent,
  },

  {
    path: "new",
    component: CustomerNewComponent,
  },
  {
    path: ":id",
    component: CustomerDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
