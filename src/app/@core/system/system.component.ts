import { Component, Input, OnInit } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguageList } from '@core/services/language/language.config';
import { ThemeService } from '@core/services/theme';

@Component({
  selector: 'app-system',
  template: ''
})
export class  SystemComponent
implements    OnInit {

  // DEVICE FEATURES
  @Input() platforms?       : any[];
  @Input() platformsFirst?  : any;
  @Input() platformIsMobile?: boolean;

  // SCREEN SPECIFICATIONS
  @Input() isLandscape? : boolean;
  @Input() isPortrait?  : boolean;
  @Input() isRTL?       : boolean;

  // SCREEN RESOLUTION (px)
  @Input() screenWidth? : any = 0;
  @Input() screenHeight?: any = 0;

  constructor(
    public platform: Platform,
    public network: Network,
    public themeService: ThemeService,
    public translate: TranslateService
  ) {

    // AVAILABLE LANGUAGES
    translate.addLangs([
      LanguageList.en,
      LanguageList.tr
    ]);

    // SET DEVICE FEATURES
    this.platforms        = platform.platforms();
    this.platformsFirst   = platform.platforms()[0];
    this.platformIsMobile = platform.is('mobile')?? true;

    // SET SCREEN SPECIFICATIONS
    this.isLandscape      = platform.isLandscape()?? true;
    this.isPortrait       = platform.isPortrait()?? true;
    this.isRTL            = platform.isRTL?? true;

    // SET SCREEN RESOLUTION (px)
    this.screenWidth      = platform.width();
    this.screenHeight     = platform.height();

  }

  ngOnInit() {

    this.network.onDisconnect().subscribe(() => {
      console.log('The internet connection of the device has been lost (onDisconnect).');
    });

    this.network.onConnect().subscribe(() => {
      console.log('The device is connected to the internet (onConnect).');
    });

  }

}
