// HttpClient for making HTTP requests, HttpHeaders for setting headers, HttpParams for setting query params
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'environments/environment'; // Environment variables
import { Observable } from 'rxjs'; // Observable from RxJS library
import { WeatherData } from '../models/weather-model'; // Weather data model

// Injectable decorator with metadata stating that this service should be created at the root level
//The API call is an Observable, which returns data that adheres to the WeatherData interface
@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  // Inject HttpClient into the service via constructor
  constructor(private http: HttpClient) { }

  // Method to fetch weather data for a given city name
  getWeatherData (cityName: string): Observable<WeatherData> {

    // Perform a GET request to the weather API
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders() // Set custom headers using environment variables
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue),
      params: new HttpParams() // Set query parameters
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    })
  }
}