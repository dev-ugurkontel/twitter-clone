import { Injectable } from '@angular/core';
import { getItem, StorageItem } from '@app/@core/utils/local-storage.utils';
import { TranslateService } from '@ngx-translate/core';
import { LanguageList } from './language.config';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translate: TranslateService
  ) { }

  /**
   * Returns language selection in localStorage
   */
  get currentAppLanguage(): LanguageList {
    return getItem(StorageItem.language) as LanguageList;
  }

  /**
   * Sets the language selection when accessing the app
   */
  init() {
    switch (this.currentAppLanguage) {
      case LanguageList.en:
        this.translate.use(LanguageList.en);
        break;
      case LanguageList.tr:
        this.translate.use(LanguageList.tr);
        break;
        default:
          // SET DEFAULT BROWSER LANGUAGE
          this.translate.use(this.translate.getBrowserLang());
          break;
    }
  }

}
