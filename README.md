# Is It T-Shirt Weather App
An app that fetches data from <a href="https://openweathermap.org/api">OpenWeather API</a> to display the current temperature and weather description of a city of your choice. If the temperature is higher than 18 degrees celsius, it's t-shirt weather. If not, keep the long-sleeves on!

I created this as a .NET application with C# on the backend and React on the frontend, as those are the areas where I would like to practice and my aim was to make an API call on the backend and get the React frontend to chat to the backend.

## How to run this app

1. Clone this repo.
2. Open the project in Visual Studio.
3. Build the project.
4. Visit `localhost:5001`

Visit: https://isittshirtweather.azurewebsites.net

*Update* My Azure free trial has ended :'( So to run the program please use steps 1 - 4 above :)


## How to use this app
Type in the city of your choice and press submit to fetch data about the weather in that city, and see whether or not you should brave wearing a t-shirt!

Visit https://isittshirtweather.azurewebsites.net/ and enter a city. When you click submit, you'll be shown all the info :)

## Acknowledgments
- Jordan Roberts
- <a href="https://openweathermap.org/api">OpenWeather API</a>
- I followed <a href="https://jonhilton.net/2017/01/24/retrieve-data-from-a-third-party-openweather-api-using-asp-net-core-web-api/">this tutorial</a> to work out how to make API calls in a .NET app
