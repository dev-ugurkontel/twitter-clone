/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable eqeqeq */
/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { faBars, faPaw, faHashtag, faTimes, faListAlt, faUser, faBookmark, faInbox, faBinoculars, faCog, faQuestionCircle, faBolt, faFillDrip } from '@fortawesome/free-solid-svg-icons';
import { GestureController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public profileUrl = 'alex';

  public faBars = faBars;
  public faPaw = faPaw;
  public faHashtag = faHashtag;
  public faTimes = faTimes;
  public faListAlt = faListAlt;
  public faUser = faUser;
  public faBookmark = faBookmark;
  public faInbox = faInbox;
  public faBinoculars = faBinoculars;
  public faCog = faCog;
  public faQuestionCircle = faQuestionCircle;
  public faBolt = faBolt;
  public faFillDrip = faFillDrip;

  public sidebar: any;
  public sidebarOutside: any;

  @ViewChildren('sidebar', { read: ElementRef })
  itemContainer: QueryList<ElementRef>;

  constructor(
    private gestureCtrl: GestureController,
    private renderer2: Renderer2
  ) { }

  ngAfterViewInit(): void {
    const windowWidth = window.innerWidth;
    const containerArray = this.itemContainer.toArray();

    let startX;
    let startDeltaX;

    for (let i = 0; i < containerArray.length; i++) {
      const containerElement = containerArray[i].nativeElement;

      const sidebar = containerElement.childNodes[0];
      this.sidebar = containerElement.childNodes[0];

      const sidebarOutside = containerElement.childNodes[1];
      this.sidebarOutside = containerElement.childNodes[1];

      const swipeGesture = this.gestureCtrl.create(
        {
          el: sidebar,
          threshold: 0,
          direction: 'x',
          gestureName: 'swipe-sidebar',
          gesturePriority: 0,
          onStart: (ev) => {

            startX = ev.startX;
            startDeltaX = ev.deltaX;

          },
          onMove: (ev) => {

            const deltaX = ev.deltaX;

            if (deltaX > 0) {

              sidebar.style.transform = `translateX(0px)`;

            } else {

              this.renderer2.setAttribute(sidebar, 'style', 'opacity: 0.95');

              sidebar.style.transform = `translateX(${deltaX}px)`;

              // Sola doğru döndürür (10'a bölmemizin sebebi, dönme efektini azaltmak)
              // sidebar.style.transform = `translateX(${deltaX}px) rotate(${deltaX / 20}deg)`;

            }

          },
          onEnd: (ev) => {

            const deltaX = ev.deltaX;
            const sidebarWidth = windowWidth * 0.75;
            const sidebarHalfWidth = -sidebarWidth / 2;

            if (deltaX < sidebarHalfWidth) {

              this.renderer2.removeClass(sidebar, 'toggle');
              this.renderer2.removeAttribute(sidebar, 'style');

              this.renderer2.removeClass(sidebarOutside, 'overlay');

            } else {

              sidebar.style.transform = 'none';
              this.renderer2.setAttribute(sidebar, 'style', 'transform: translateX(0px); opacity: 1');

            }

          }
        }
      );

      // Don't forget to enable!
      swipeGesture.enable(true);
    }
  }

  ngOnInit(): void { }

  toggleMenu(): void {
    if (this.sidebar.style.transform != 'none') {
      this.renderer2.addClass(this.sidebarOutside, 'overlay');
      this.sidebar.style.transform = 'none';
    } else {
      this.renderer2.removeClass(this.sidebar, 'toggle');
      this.renderer2.removeAttribute(this.sidebar, 'style');
      this.renderer2.removeClass(this.sidebarOutside, 'overlay');
    }
  }

  homepageSettings(): void {
    alert('homepage settings');
  }

}
