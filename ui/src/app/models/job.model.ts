import { Customer } from '../customers/models/customer.model';

export interface JobModel {
  jobId: number;
  engineer: string;
  when: Date;
  customer: Customer;
}
