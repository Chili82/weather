using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiWeather.Models;

namespace WebApiWeather.Controllers
{
    public class ProductController : ApiController
    {
        Product[] products = new Product[]
        {
            new Product { Id = 1, Name = "Tomato Soup", Category = "Groceries", Price = 1 },
            new Product { Id = 2, Name = "Yo-yo", Category = "Toys", Price = 3.75M },
            new Product { Id = 3, Name = "Hammer", Category = "Hardware", Price = 16.99M }
        };

        [Route("api/product/")]
        public IEnumerable<Product> GetAllProducts()
        {
            return products;
        }
        [Route("api/product/{name:alpha}")]
        public IEnumerable<Product> GetProductByName(string name)
        {
            return products.Where((p) => p.Name.ToLower().Contains(name.ToLower())).ToList();
        }
    }
}
