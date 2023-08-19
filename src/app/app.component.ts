import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from './api/weather-api.service';
import { WeatherData } from './models/weather-model';

@Component({
  selector: 'app-root', // The CSS selector that identifies this component in a template
  templateUrl: './app.component.html', // The location of this component's template file
  styleUrls: ['./app.component.css'] // The location of this component's private CSS styles 
})
export class AppComponent implements	OnInit { // AppComponent implements OnInit lifecycle hook
  // Constructor with WeatherApiService injected

  constructor (private weatherService :WeatherApiService) {}

  cityName: string = 'Santiago'; // Variable for city name
  weatherData?: WeatherData; // Variable for storing weather data
  
  // ngOnInit lifecycle hook that is called after data-bound properties of a directive are initialized
  ngOnInit(): void {
    this.getWeatherData(this.cityName);  // Call getWeatherData method initially with default city 'Santiago'
    this.cityName = ''; 
  }

  // Method to handle form submission
  onSubmit() {
    this.getWeatherData (this.cityName); // Call getWeatherData method with the entered city name and reset city name
    this.cityName = '';
  }

  // Method to get weather data from the weather service
  private getWeatherData (cityName: string) {
    this.weatherService.getWeatherData (cityName)
    .subscribe ({
       // Function to handle the emitted value from the Observable
      next: (response) => {
        this.weatherData = response;
        console.log (response);
      }
    });
  }
}
