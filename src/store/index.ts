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
    removeUserFromCollection(state, userId: string): void {
      state.users = state.users.filter(user => user.id !== userId);
    },
    editUser(state, userInfo: UserInfo): void {
      state.users = state.users.map(user => {
        if (user.id === userInfo.id) {
          return userInfo;
        } else {
          return user;
        }
      });
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
    removeUser(state, userId: string): void {
      usersService.removeUser(userId).then(
        () => {
          state.commit('removeUserFromCollection', userId);
        }
      )
      .catch((error) => {
        console.error(error);
      });
    },
    editUser(state, userInfo: UserInfo): void {
      usersService.editUser(userInfo).then(
        (userInfo: UserInfo) => {
          state.commit('editUser', userInfo);
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
