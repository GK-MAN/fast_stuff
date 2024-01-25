import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Auth {

    private token: any | null = null;
    private user: any | null = null;

    constructor() {
        this.token = localStorage.getItem('user_token') || null;

        const userString = localStorage.getItem('logged_in_user');
        const loggedInUser: any | null = userString ? JSON.parse(userString) as any : null;
        this.user = loggedInUser || null;
    }

    setToken(token: any): void {
        this.token = token;
        localStorage.setItem('user_token', this.token);
    }

    setUser(user: any): void {
        this.user = user.user;
        localStorage.setItem('logged_in_user', JSON.stringify(this.user));
    }

    getToken(): string | null {
        return this.token;
    }
}
