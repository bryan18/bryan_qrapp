import { Component } from '@angular/core';
import {HomePage, GuardadosPage} from '../index.paginas';
/**
 * Generated class for the TabPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {

  tab1:any = HomePage;
  tab2:any = GuardadosPage

  constructor() {
  }

}
