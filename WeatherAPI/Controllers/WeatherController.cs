using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WeatherAPI.Controllers;

namespace WeatherAPI.Controllers
{
    [Route("api/[controller]")]
    public class WeatherController : Controller
    {
        [HttpGet("[action]/{city}")]
        public async Task<IActionResult> City(string city)
        {
            using (var client = new HttpClient())
            {
                try
                {
                    client.BaseAddress = new Uri("http://api.openweathermap.org");
                    var response = await client.GetAsync($"/data/2.5/weather?q={city}&appid={ApiKeys.ApiKey}&units=metric");
                    response.EnsureSuccessStatusCode();

                    var stringResult = await response.Content.ReadAsStringAsync();
                    var rawWeather = JsonConvert.DeserializeObject<OpenWeatherResponse>(stringResult);
                    return Ok(new
                    {
                        Temp = rawWeather.Main.Temp,
                        City = rawWeather.Name,
                        Summary = rawWeather.Weather.Select(x => x.Description)
                    }); 
                }
                catch (HttpRequestException httpRequestException)
                {
                    return BadRequest($"Error getting weather from OpenWeather: {httpRequestException.Message}");
                }
            }

        }

    }

    public class OpenWeatherResponse
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public Main Main { get; set; }
        public IEnumerable<WeatherDescription> Weather { get; set; }
    }

    public class Main
    {
        public string Temp { get; set; }
    }

    public class WeatherDescription
    {
        public string Description { get; set; }
    }
}
