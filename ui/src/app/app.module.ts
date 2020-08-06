import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { JobDetailComponent } from "./job-detail/job-detail.component";
import { JobComponent } from "./job/job.component";
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [AppComponent, JobComponent, HomeComponent, JobDetailComponent],
  // CustomerModule is lazy loaded. But because the job component is part of the main module
  // and consumes the customer service I import it here.
  // If there was a JobModule, the customersModule could be imported there
  imports: [FormsModule, BrowserModule, HttpClientModule, AppRoutingModule, CustomersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
