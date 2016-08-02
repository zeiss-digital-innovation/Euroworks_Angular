
export class ComboboxOption {
	id: string;
	title: string;

	constructor(id: string, title?: string) {
		this.id = id;
		this.title = title || id;
	}
}
