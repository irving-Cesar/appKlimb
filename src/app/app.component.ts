import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Projetos em andamento',
      url: '/tela-descanso',
      icon: 'hammer'
    },
    {
      title: 'Vizualizar projetos',
      url: '/folder/Outbox',
      icon: 'eye'
    },
    {
      title: 'Adicionar projetos',
      url: '/folder/Favorites',
      icon: 'add-circle'
    },
    {
      title: 'Histórico de projetos',
      url: '/folder/Archived',
      icon: 'time'
    },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.checkDarkTheme();
    });
  }

  checkDarkTheme(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
   if  (prefersDark.matches){
     document.body.classList.toggle('dark')
   }

  }


  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
