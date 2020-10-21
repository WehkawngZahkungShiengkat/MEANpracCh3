import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  public getPosition(cbSuccess, cbError, cbNoGeo): void {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
    console.log("I am if getPosition");
    } else {
    cbNoGeo();
    console.log("I am else geoPosition")
    }
  }
}
