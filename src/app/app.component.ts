import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'carr-leasing';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  switchLanguage(language) {
    this.translate.use(language);
  }
  ngOnInit() {
    AOS.init();
  }
}
