using System;
using Microsoft.AspNetCore.Mvc;
using DeveloperTest.Business.Interfaces;
using DeveloperTest.Models;

namespace DeveloperTest.Controllers
{
    [ApiController, Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService customerService;

        public CustomerController(ICustomerService customerService)
        {
            this.customerService = customerService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(customerService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var customer = customerService.GetById(id);

            if (customer == null)
            {
                return NotFound();
            }

            return Ok(customer);
        }

        [HttpPost]
        public IActionResult Create(CustomerPost model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var customer = customerService.Create(model);

            return Created($"customer/{customer.Id}", customer);
        }
    }
}