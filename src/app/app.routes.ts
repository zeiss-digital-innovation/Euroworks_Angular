/**
 * Created by stefan.bley on 03.08.2016.
 */
import {provideRouter, RouterConfig} from '@angular/router';
import {EwSearchComponent} from './ew-search/ew-search.component';
import {EwAboutComponent} from './ew-about/ew-about.component';
import {EwContactComponent} from './ew-contact/ew-contact.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {path: 'search', component: EwSearchComponent},
  {path: 'about', component: EwAboutComponent},
  {path: 'contact', component: EwContactComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
