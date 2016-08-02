import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component(
    {
        selector: 'labeled-checkbox',
        template: `
            <div>
                <input id="cb" type="checkbox" [(ngModel)]="checked" (ngModelChange)="checkedChange.emit($event)"/>
                <label for="cb">{{label}}</label>
            </div>
        `
    }
)
export class LabeledCheckboxComponent {
    @Input()
    private label: string;

	@Input()
    public checked: boolean;

	@Output()
	public checkedChange = new EventEmitter<boolean>();
}
