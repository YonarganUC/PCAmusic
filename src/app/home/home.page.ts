import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  artists: any

  constructor(
    private router: Router,
    private musicService: MusicService
  ) {}

  ngOnInit() {
    this.artists = this.musicService.getArtistJson().artists
    console.log(this.artists)
  }

  accsess() {
    this.router.navigateByUrl("/intro")
  }

}