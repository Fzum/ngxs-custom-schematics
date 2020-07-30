import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-<%= dasherize(name) %>-view',
    templateUrl: './<%= dasherize(name) %>.view.component.html',
    styleUrls: ['./<%= dasherize(name) %>.view.component.scss'],
})
export class <%= classify(name) %>ViewComponent implements OnInit {
    @Input() input: any;

    @Output() output = new EventEmitter<any>();

    constructor() {}

    ngOnInit(): void {}
}
