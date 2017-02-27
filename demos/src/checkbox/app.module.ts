import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../src';


@Component({
  templateUrl: 'page.html'
})
export class ApiDemoPage {

  data = {
    jon: true,
    daenerys: true,
    arya: false,
    tyroin: false,
    sansa: true,
    khal: false,
    cersei: true,
    stannis: true,
    petyr: false,
    hodor: true,
    catelyn: true,
    bronn: false
  };

}


@Component({
  template: '<ion-nav [root]="root"></ion-nav>'
})
export class ApiDemoApp {
  root = ApiDemoPage;
}


@NgModule({
  declarations: [
    ApiDemoApp,
    ApiDemoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ApiDemoApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ApiDemoPage
  ]
})
export class AppModule {}
