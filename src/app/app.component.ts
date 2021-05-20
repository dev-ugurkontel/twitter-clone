import { Component, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '@core/services/theme';
import { SystemComponent } from '@core/system/system.component';
import { LanguageService } from '@core/services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class  AppComponent
extends       SystemComponent
implements    OnInit {

  constructor(
    public platform: Platform,
    public network: Network,
    public themeService: ThemeService,
    public translate: TranslateService,

    public languageService: LanguageService
  ) {
    super(platform, network, themeService, translate);
  }

  ngOnInit() {
    // THEME SERVICE (set preferred theme)
    this.themeService.init();

    // LANGUAGE SERVICE (set preferred language)
    this.languageService.init();

    console.log(this.platforms);
    console.log(this.platformsFirst);
    console.log(this.platformIsMobile);

    console.log(this.isLandscape);
    console.log(this.isPortrait);
    console.log(this.isRTL);

    console.log(this.screenWidth);
    console.log(this.screenHeight);
  }

}
