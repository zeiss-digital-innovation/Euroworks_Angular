import { Component, Output, Input, EventEmitter } from '@angular/core';

import { ComboboxOption } from './ew-combobox-option';
export { ComboboxOption } from './ew-combobox-option';

@Component({
  moduleId: module.id,
  selector: 'ew-combobox',
  templateUrl: 'ew-combobox.component.html',
  styleUrls: ['ew-combobox.component.css']
})
export class ComboboxComponent {

	@Input()
	private options: Array<ComboboxOption>

	@Output()
	private selectionChange = new EventEmitter<ComboboxOption>();

}
