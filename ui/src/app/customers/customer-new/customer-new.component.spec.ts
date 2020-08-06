import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomerNewComponent } from "./customer-new.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("CustomerNewComponent", () => {
  let component: CustomerNewComponent;
  let fixture: ComponentFixture<CustomerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CustomerNewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
