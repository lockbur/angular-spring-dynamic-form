import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Route, Router} from 'angular2/router';
import {Header} from './header/header';
import {Customers} from './customers/customers';
import {Customer} from './customer/customer';

@Component({
    selector: 'dynamic-app',
    templateUrl:'./app/app.html',
    directives: [ROUTER_DIRECTIVES,Header]
})
@RouteConfig([
    new Route({path: '/customers', component: Customers, name: 'Customers',useAsDefault: true}),
    new Route({path: '/customer/:id', component: Customer, name: 'Customer'})
    /*new Route({path: '/user/:id', component: User, name: 'User'})*/
])
export class AppComponent {
    constructor(router:Router) {
    }
}