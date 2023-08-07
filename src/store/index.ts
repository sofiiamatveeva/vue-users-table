import { createStore } from 'vuex'
import UsersService from '@/services/users.service';
import { UserInfo } from '@/interfaces/api.interface';
import { Store } from '@/interfaces/component.interface';
import { AxiosResponse } from 'axios';

const usersService = new UsersService();

export default createStore<Store>({
  state: {
    users: [],
  },
  getters: {
  },
  mutations: {
    addUserToTable(state, userInfo: UserInfo): void {
      state.users.push(userInfo);
    },
    updateUsersCollection(state, users: UserInfo[]): void {
      state.users = users;
    },
  },
  actions: {
    saveUser(state, userInfo: UserInfo): void {
      usersService.addUser(userInfo).then(
        () => {
          state.commit('addUserToTable', userInfo);    
        }
      )
      .catch((error) => {
        console.error(error);
      });
    },
    getUsers(state): void {
      usersService.getAllUsers().then(
        (users: UserInfo[]) => {
          state.commit('updateUsersCollection', users);
        }
      )
      .catch((error) => {
        console.error(error);
      });
    },
  },
  modules: {
  }
})
