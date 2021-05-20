/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable eqeqeq */
/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
import { Component, OnInit, Renderer2 } from '@angular/core';
import { faHashtag, faHouseUser, faSearch, faBell, faInbox } from '@fortawesome/free-solid-svg-icons';
import { GestureController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  public faHashtag = faHashtag;
  public faHouseUser = faHouseUser;
  public faSearch = faSearch;
  public faBell = faBell;
  public faInbox = faInbox;

  constructor(
    private gestureCtrl: GestureController,
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void { }


  homepageSettings(): void {
    alert('homepage settings');
  }

}
