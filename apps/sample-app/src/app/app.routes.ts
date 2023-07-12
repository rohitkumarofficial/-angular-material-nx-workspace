import { Route } from '@angular/router';
import { SamplePageComponent } from './sample-page/sample-page.component';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/sample-page',
        pathMatch: 'full'
    }, {
        path: 'sample-page',
        component: SamplePageComponent
    }
];
