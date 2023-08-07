import { v4 as uuidv4 } from 'uuid';

export default class User {
	public id!: string;
	public name!: string;
	public lastname!: string;

	constructor(
		name: string,
		lastname: string,
	) {
		this.id = uuidv4();
		this.name = name;
		this.lastname = lastname;
	}
}