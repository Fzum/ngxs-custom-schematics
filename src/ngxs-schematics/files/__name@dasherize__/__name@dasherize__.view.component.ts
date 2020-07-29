import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-<%= dasherize(name) %>-view',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss'],
})
export class <%= classify(name) %>UiComponent implements OnInit {
    @Input() input: any;

    @Output() output = new EventEmitter<any>();

    constructor() {}

    ngOnInit(): void {}
}
