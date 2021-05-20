/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable guard-for-in */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { getItem, setItem, StorageItem } from '../../../@core/utils/local-storage.utils';
import { fromEventPattern, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { defaultBaseTheme, ThemeList } from './theme.config';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  destroy$ = new Subject();

  private readonly mediaQuery = window.matchMedia(
    '(prefers-color-scheme: default-light)'
  );

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  get systemTheme(): ThemeList.defaultLight | ThemeList.defaultDark {
    return this.mediaQuery.matches ? ThemeList.defaultDark : ThemeList.defaultLight;
  }

  get currentAppTheme(): ThemeList {
    return getItem(StorageItem.theme) as ThemeList;
  }

  /**
   * Makes initial check for system preferences and attach mediaQuery listener
   */
  init(): void {
    if (this.currentAppTheme) {
      this.setTheme(this.currentAppTheme);
    } else if (this.currentAppTheme === ThemeList.defaultLight) {
      this.setTheme(this.systemTheme);
    } else {
      this.setTheme(defaultBaseTheme);
    }

    this.listenForMediaQueryChanges();
  }

  /**
   * Manually changes theme in BehaviorSubject, LocalStorage & HTML element
   *
   * @param theme new theme
   */
  setTheme(theme: ThemeList): void {
    this.clearThemes();
    setItem(StorageItem.theme, theme);

    let bodyClass = theme;

    if (theme === ThemeList.defaultLight) {
      bodyClass = this.systemTheme;
    }

    this.document.body.classList.add(bodyClass);
  }

  /**
   * Handles system color preference changes   *
   */
  private listenForMediaQueryChanges(): void {
    fromEventPattern<MediaQueryListEvent>(
      this.mediaQuery.addListener.bind(this.mediaQuery),
      this.mediaQuery.removeListener.bind(this.mediaQuery),
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        // Only applies changes when the current theme is "system"
        if (this.currentAppTheme === ThemeList.defaultLight) {
          this.setTheme(ThemeList.defaultLight);
        }
      });
  }

  /**
   * Clears all themes in ThemeList enum from the HTML element   *
   */
  private clearThemes(): void {
    for (const theme in ThemeList) {
      const key: ThemeList = ThemeList[theme as keyof typeof ThemeList];
      this.document.body.classList.remove(key);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
