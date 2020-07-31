import { Component } from '@angular/core';
import { <%= classify(name) %>FacadeService } from './<%= dasherize(name) %>.facade.service';

@Component({
    selector: 'app-<%= dasherize(name) %>-container',
    template: `<app-<%= dasherize(name) %>-view></app-<%= dasherize(name) %>-view>`
})
export class <%= classify(name) %>ContainerComponent {
    constructor(public service: <%= classify(name) %>FacadeService) {
        service.dispatchAction();
    }
}
