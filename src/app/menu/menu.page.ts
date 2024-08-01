import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  closeMenu() {
    console.log("cerrar menu")
    this.menu.close()
  }

  logout() {
    console.log("cerrar sesión")
    this.storage.set("isuserLoggedIn",false)
    this.navCtrl.navigateRoot("/login")
  }
}
