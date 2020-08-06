using System.Linq;
using DeveloperTest.Business.Interfaces;
using DeveloperTest.Database;
using DeveloperTest.Database.Models;
using DeveloperTest.Models;
using Microsoft.AspNetCore.Authentication.OAuth.Claims;

namespace DeveloperTest.Business
{
    public class CustomerService : ICustomerService
    {
        private readonly ApplicationDbContext context;

        public CustomerService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public CustomerGet[] GetAll()
        {
            return context.Customers.Select(MapEntityToModel).ToArray();
        }

        public CustomerGet GetById(int id)
        {
            return context.Customers.Where(x => x.Id == id).Select(MapEntityToModel).SingleOrDefault();
        }

        public CustomerGet Create(CustomerPost model)
        {
            var createdCustomer = context.Customers.Add(new Customer
            {
                Name = model.Name,
                Type = model.Type
            });

            context.SaveChanges();

            return MapEntityToModel(createdCustomer.Entity);
        }

        public CustomerGet MapEntityToModel(Customer data) {
            return new CustomerGet
            {
                Id = data.Id,
                Name = data.Name,
                Type = data.Type
            };
        }
    }
}
