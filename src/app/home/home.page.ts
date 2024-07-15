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
      title: "Juan Pérez",
      icon: "hammer",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFJfQpO3v4NSrlVvMpFYWw7YjijzAKTbuXHg&s",
      image: "https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-06Persian20Long20Hair.1.jpg?itok=fNYIwAP5",
      description: "Gato persa"
    },
    {
      title: "María Gómez",
      icon: "glasses",
      avatar: "https://img.freepik.com/vector-premium/ilustracion-avatar-mujer-negocios-retrato-usuario-dibujos-animados-simple-lider-empresarial_118339-4424.jpg",
      image: "https://gatos.plus/wp-content/uploads/2020/05/gato-angora.jpg",
      description: "Gato angora"
    },
    {
      title: "Carlos Ramírez",
      icon: "happy",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUoR-yOX8K8OKoCV4iULO0R4pus6-OXifLFOj_bR8gghVfrDYd9v5IaXsEr6YfWt6wM-w&usqp=CAU",
      image: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/04/siames-scaled.jpg?fit=1200%2C800&quality=55&strip=all&ssl=1",
      description: "Gato siamés"
    },
    {
      title: "Ana Fernández",
      icon: "headset",
      avatar: "https://thumbs.dreamstime.com/z/ilustración-de-avatar-una-mujer-negocios-retrato-simple-un-usuario-dibujos-animados-líder-empresarial-icono-perfil-vectorial-277139072.jpg",
      image: "https://img.asmedia.epimg.net/resizer/v2/L75EIGOVGZA3ZHZ3UAZY7GHK7E.jpg?auth=ee41492d1403cf60e8fe4b76ecf94770e8a6ae5e9289b69671b51e3539511cd9&width=1472&height=1104&smart=true",
      description: "Gato bengalí"
    },
    {
      title: "Laura Rodríguez",
      icon: "heart",
      avatar: "https://thumbs.dreamstime.com/z/mujer-hermosa-con-gafas-de-sol-icono-del-personaje-avatar-ilustración-vectorial-197188275.jpg",
      image: "https://www.trespm.mx/media/k2/items/cache/72659d149022f99ce410f66416c5fa94_XL.jpg",
      description: "Gato bombay"
    }
  ]

  constructor() {}

}