import { TitleStrategy, RouterStateSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
    constructor(private title: Title) {
    super();
    }

    // simple implementation of buildTitle -> fallback to default title
    // updateTitle(routerState: RouterStateSnapshot) {
    //     const title = this.buildTitle(routerState) ?? 'DEMO-ROUTING';
    //     this.title.setTitle(title);
    // }

    // more complex implementation of buildTitle -> combine or fallback to default title
    updateTitle(routerState: RouterStateSnapshot) {
        const title = this.buildTitle(routerState) ?? 'DEMO-ROUTING';
        if (title) {
            this.title.setTitle(`${title} | DEMO-ROUTING`);
        } else {
            this.title.setTitle('DEMO-ROUTING');
        }

    }
}