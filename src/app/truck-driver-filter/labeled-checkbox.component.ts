import {Component, Input, Output } from '@angular/core';

@Component(
    {
        selector: 'labeled-checkbox',
        template: `
            <div>
                <label for="cb">{{label}}</label>
                <input id="cb" type="checkbox" [(ngModel)]="checked"/>
            </div>
        `
    }
)
export class LabeledCheckboxComponent {
    @Input()
    private label: string;

    public checked: boolean;
}
