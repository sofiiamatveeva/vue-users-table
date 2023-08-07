import { UserInfo } from "@/interfaces/api.interface";
import ApiService from "./api.service";

export default class UsersService {
	private _apiService!: ApiService;
	
	constructor() {
		this._apiService = new ApiService();
	}

	public async addUser(userInfo: UserInfo) {
		try {
			return await this._apiService.addUser(userInfo);
		} catch(error: any) {
			throw new Error(error.message);
		}
	}
}