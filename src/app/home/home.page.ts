import { Component, OnInit } from '@angular/core';
import { setItem, StorageItem } from '@app/@core/utils/local-storage.utils';
import { ThemeList, ThemeService } from '@core/services/theme';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  theme = ThemeList;

  constructor(
    public themeService: ThemeService,
    public translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  onClickChangeLanguage(language: string) {
    this.translate.use(language);
    setItem(StorageItem.language, language);
  }

  onClickSetTheme(theme: ThemeList): void {
    this.themeService.setTheme(theme);
  }

}


