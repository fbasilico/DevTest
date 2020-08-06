import { TestBed, inject } from "@angular/core/testing";
import { CustomersService } from "./customers.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Customer } from "./models/customer.model";
import { of } from "rxjs";

fdescribe("CustomersService", () => {
  let service: CustomersService;
  let http: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CustomersService],
    });

    service = TestBed.get(CustomersService);
    http = TestBed.get(HttpClient);
  });

  describe("getAll", () => {
    it("should call customer get endpoint", () => {
      spyOn(http, "get");

      service.getAll();

      expect(http.get).toHaveBeenCalled();
      expect(http.get).toHaveBeenCalledWith("http://localhost:63235/customer");
    });
  });
  describe("getById", () => {
    it("should call customer get endpoint", () => {
      spyOn(http, "get");
      const mockedId = 1;

      service.getById(mockedId);

      expect(http.get).toHaveBeenCalled();
      expect(http.get).toHaveBeenCalledWith(
        `http://localhost:63235/customer/${mockedId}`
      );
    });
  });
  describe("create", () => {
    it("should call customer get endpoint", () => {
      spyOn(http, "post").and.returnValue(of(true));
      const mockedCustomer: Customer = {
        name: "test-name",
        type: 2,
      };
      service.create(mockedCustomer);

      expect(http.post).toHaveBeenCalled();
      expect(http.post).toHaveBeenCalledWith(
        "http://localhost:63235/customer",
        mockedCustomer
      );
    });
  });
});
