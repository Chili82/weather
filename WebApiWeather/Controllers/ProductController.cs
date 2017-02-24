using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
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

        [Route("api/product/weather/{city:alpha}")]
        public async Task<HttpResponseMessage> GetWeather(string city)
        {
            string url = "http://api.openweathermap.org/data/2.5/weather?q=" + city +
            "&appid=59a09e40f741432d89830ab9344856e1&units=metric&lang=hr";

            using (HttpClient client = new HttpClient())
            {
                string responseFromServer = await client.GetStringAsync(url);

                return new HttpResponseMessage()
                {
                    Content = new StringContent(responseFromServer, System.Text.Encoding.UTF8, "application/json")
                };

            }

                

            //using (WebClient client = new WebClient())
            //{
            //    string responseFromServer = client.DownloadString(url);

            //    return new HttpResponseMessage()
            //        {
            //            Content = new StringContent(responseFromServer, System.Text.Encoding.UTF8, "application/json")
            //        };
            //}

            //WebRequest request = WebRequest.Create(url);
            //request.ContentType = "application/json";
            //request.Method = "GET";


            //using (WebResponse response = request.GetResponse())
            //{
            //    using (Stream dataStream = response.GetResponseStream())
            //    {
            //        StreamReader reader = new StreamReader(dataStream, Encoding.UTF8);
            //        // Read the content.
            //        string responseFromServer = reader.ReadToEnd();

            //        reader.Close();

            //        return new HttpResponseMessage()
            //        {
            //            Content = new StringContent(responseFromServer, System.Text.Encoding.UTF8, "application/json")
            //        };
            //    }
            //}
        }
    }
}
