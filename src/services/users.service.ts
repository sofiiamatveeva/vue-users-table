import { UserInfo } from "@/interfaces/api.interface";
import ApiService from "./api.service";
import { AxiosResponse } from "axios";

export default class UsersService {
	private _apiService!: ApiService;
	
	constructor() {
		this._apiService = new ApiService();
	}

	public async addUser(userInfo: UserInfo): Promise<UserInfo> {
		try {
			const user = await this._apiService.addUser(userInfo);

			return user.data;
		} catch(error: any) {
			throw new Error(error.message);
		}
	}

	public async getAllUsers(): Promise<UserInfo[]> {
		try {
			const users = await this._apiService.getAllUsers();

			return users.data;
		} catch(error: any) {
			throw new Error(error.message);
		}
	}

	public async removeUser(userId: string): Promise<UserInfo> {
		try {
			const user = await this._apiService.removeUser(userId);

			return user.data;
		} catch(error: any) {
			throw new Error(error.message);
		}
	}
}