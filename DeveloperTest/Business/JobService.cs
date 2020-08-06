using System.ComponentModel.Design.Serialization;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using DeveloperTest.Business.Interfaces;
using DeveloperTest.Database;
using DeveloperTest.Database.Models;
using DeveloperTest.Models;
using Microsoft.EntityFrameworkCore;

namespace DeveloperTest.Business
{
    public class JobService : IJobService
    {
        private readonly ApplicationDbContext context;

        public readonly ICustomerService _customerService;

        public JobService(
            ApplicationDbContext context,
            ICustomerService customerService)
        {
            this.context = context;
            _customerService = customerService;
        }

        public JobModel[] GetJobs()
        {
            return context.Jobs.Select(x => new JobModel
            {
                JobId = x.JobId,
                Engineer = x.Engineer,
                When = x.When,
                Customer = x.Customer != null ? _customerService.MapEntityToModel(x.Customer) : null
            }).ToArray();
        }

        public JobModel GetJob(int jobId)
        {
            return context.Jobs.Include(x=> x.Customer).Where(x => x.JobId == jobId).Select(MapEntityToModel).SingleOrDefault();
        }

        public JobModel CreateJob(BaseJobModel model)
        {
            var selectedCustomer = context.Customers.Find(model.CustomerId);

            var addedJob = context.Jobs.Add(new Job
            {
                Engineer = model.Engineer,
                When = model.When,
                Customer = selectedCustomer

            });

            context.SaveChanges();

            return MapEntityToModel(addedJob.Entity);
        }

        private JobModel MapEntityToModel(Job data) {
            return new JobModel
            {
                JobId = data.JobId,
                Engineer = data.Engineer,
                When = data.When,
                Customer = data.Customer != null ? _customerService.MapEntityToModel(data.Customer) : null
            };
        }
    }





}
