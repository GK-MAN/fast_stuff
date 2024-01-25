import { Component } from '@angular/core';
// import { AuthService } from '../services/auth.service';
import { Auth } from '../helpers/auth.service'


@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    constructor(private auth: Auth) {}

    ngOnInit() {
        // alert(1);
        this.method();
        // alert(this.auth.getToken());
        // this.checkForToken();
    }

    method() {
        this.auth.setToken(5);
        return;
    }
      

}
