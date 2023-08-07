import { createStore } from 'vuex'
import UsersService from '@/services/users.service';
import { UserInfo } from '@/interfaces/api.interface';
import { Store } from '@/interfaces/component.interface';

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
  },
  modules: {
  }
})
