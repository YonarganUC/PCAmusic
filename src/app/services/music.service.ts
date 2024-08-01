import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json"

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  urlServer = "https://music.fly.dev"
  httpHeaders = { headers: new HttpHeaders({"Content-Type": "application/json"})}
  constructor( 
    private http:HttpClient
  ) { }

  getArtistJson() {
    return dataArtists
  }

  getArtists() {
    //primera forma
    //return this.http.get(`${this.urlServer}/artists`, this.httpHeaders)
    return fetch(`${this.urlServer}/artists`).then(
      response =>response.json()
    )
  }
}
