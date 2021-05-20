import { Pipe, PipeTransform } from '@angular/core';
import { LanguageList, TranslationListOfNamesByLanguage } from '@app/@core/services/language/language.config';
@Pipe({
  name: 'customLanguageOperations'
})
export class CustomLanguageOperationsPipe implements PipeTransform {

  constructor() { }

  transform(value: string, params: any): string {
    switch (params) {
      case 'namesByLanguage':
        switch (value) {
          case LanguageList.en:
            return TranslationListOfNamesByLanguage.en;
          case LanguageList.tr:
            return TranslationListOfNamesByLanguage.tr;
          default:
            return 'OTHERS.ERRORS.UNKNOWN';
        }
        break;
    }
  }

}
