import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { CustomersService } from "../customers/customers.service";
import { Customer } from "../customers/models/customer.model";
import { JobModel } from "../models/job.model";
import { EngineerService } from "../services/engineer.service";
import { JobService } from "../services/job.service";

@Component({
  selector: "app-job",
  templateUrl: "./job.component.html",
  styleUrls: ["./job.component.scss"],
})
export class JobComponent implements OnInit {
  public engineers: string[] = [];

  public jobs: JobModel[] = [];

  public newJob: JobModel = {
    jobId: null,
    engineer: null,
    when: null,
  };

  customers$: Observable<Customer[]>;

  constructor(
    private engineerService: EngineerService,
    private jobService: JobService,
    private customerService: CustomersService
  ) {}

  ngOnInit() {
    this.customers$ = this.customerService.getAll();
    this.engineerService
      .GetEngineers()
      .subscribe((engineers) => (this.engineers = engineers));
    this.jobService.GetJobs().subscribe((jobs) => (this.jobs = jobs));
  }

  public createJob(form: NgForm): void {
    if (form.invalid) {
      alert("form is not valid");
    } else {
      this.jobService.CreateJob(this.newJob).then(() => {
        this.jobService.GetJobs().subscribe((jobs) => (this.jobs = jobs));
      });
    }
  }
}
