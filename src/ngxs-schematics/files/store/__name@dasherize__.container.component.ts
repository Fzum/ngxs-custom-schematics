import { Component } from '@angular/core';
import { <%= classify(name) %>FacadeService } from "./facade-<%= name %>.service";

@Component({
    selector: 'app-<%= dasherize(name) %>-container',
    template: `<app-<%= dasherize(name) %>-view
        [input]=" | async"
        (output)="handle($event)"
    ></app-<%= dasherize(name) %>-view>`
})
export class <%= classify(name) %>ContainerComponent {
    constructor(public storeService: <%= classify(name) %>FacadeService) {}
}
