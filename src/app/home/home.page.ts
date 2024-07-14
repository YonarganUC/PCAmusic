import { Component } from '@angular/core';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  slides = [
    {
      title: "Titulo de slide 1",
      icon: "aperture",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJfQpO3v4NSrlVvMpFYWw7YjijzAKTbuXHg&s",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8L9JE5eek90hEgXgfxJui1x5c1f3aD4nGVA&s",
      description: "otro gato"
    },
    {
      title: "Titulo de slide 2",
      icon: "aperture",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJfQpO3v4NSrlVvMpFYWw7YjijzAKTbuXHg&s",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8L9JE5eek90hEgXgfxJui1x5c1f3aD4nGVA&s",
      description: "otro gato"
    },
    {
      title: "Titulo de slide 3",
      icon: "aperture",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJfQpO3v4NSrlVvMpFYWw7YjijzAKTbuXHg&s",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8L9JE5eek90hEgXgfxJui1x5c1f3aD4nGVA&s",
      description: "otro gato"
    }
  ]

  constructor() {}

}