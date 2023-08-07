import { BASE_USERS_URL } from "@/constants/constants";
import { UserInfo } from "@/interfaces/api.interface";
import axios, { AxiosResponse } from "axios";

export default class ApiService {
	private _baseUsersURL: string = BASE_USERS_URL;
	
	public async addUser(userInfo: UserInfo): Promise<AxiosResponse> {
		const url = this._baseUsersURL;
		const body = JSON.stringify(userInfo);

		return axios.post(url, body);
	}
}