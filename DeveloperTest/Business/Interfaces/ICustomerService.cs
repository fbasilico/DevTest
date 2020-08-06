using DeveloperTest.Models;

namespace DeveloperTest.Business.Interfaces
{
    public interface ICustomerService
    {
        CustomerGet[] GetAll();

        CustomerGet GetById(int id);

        CustomerGet Create(CustomerPost model);

        CustomerGet MapEntityToModel(Customer model);
        
    }
}
