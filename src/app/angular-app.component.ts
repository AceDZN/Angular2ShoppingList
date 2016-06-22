import { Component } from '@angular/core';
import {ForkBannerComponent} from './fork-banner/fork-banner.component';
import {AcedznLogoComponent} from './acedzn-logo/acedzn-logo.component';

@Component({
  moduleId: module.id,
  selector: 'angular-app',
  templateUrl: 'angular-app.component.html',
  styleUrls: ['angular-app.component.css'],
  directives:[
    ForkBannerComponent,
    AcedznLogoComponent
  ]
})
export class AngularAppComponent {
  selectedPlatform = "_______";
  title:"Angular2 Shopping List";
}
