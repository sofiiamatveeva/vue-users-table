import { BASE_USERS_URL } from "@/constants/constants";
import { UserInfo } from "@/interfaces/api.interface";
import axios, { AxiosResponse } from "axios";

export default class ApiService {
	private _baseUsersURL: string = BASE_USERS_URL;
	
	public async addUser(userInfo: UserInfo): Promise<AxiosResponse<UserInfo>> {
		const url = this._baseUsersURL;
		const body = JSON.stringify(userInfo);

		return axios.post<UserInfo>(url, body);
	}

	public async getAllUsers(): Promise<AxiosResponse<UserInfo[]>> {
		const url = this._baseUsersURL;

		return axios.get<UserInfo[]>(url);
	}

	public async removeUser(userId: string): Promise<AxiosResponse<UserInfo>> {
		const url = `${this._baseUsersURL}/${userId}`;

		return axios.delete(url);
	}
}