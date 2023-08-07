<template>
  <table>
    <head></head>
    <tr>
      <th>{{ nameCol }}</th>
      <th>{{ lastnameCol }}</th>
    </tr>
    <tr v-for="user in users" :key="user.id">
      <template v-if="activeId === user.id">
        <td><input type="text" v-model="nameToEdit" /></td>
        <td><input type="text" v-model="lastnameToEdit" /></td>
        <td>
          <button type="button" @click="editUserInTable(user)">{{ cancelButtonTitle }}</button>
          <button type="button" @click="saveUserChanges(user)">{{ saveButtonTitle }}</button>
        </td>
      </template>
      <template v-else>
        <td>{{ user.name }}</td>
        <td>{{ user.lastname }}</td>
        <td>
          <button type="button" @click="editUserInTable(user)">{{ editButtonTitle }}</button>
          <button type="button" @click="removeUserFromTable(user.id)">{{ removeButtonTitle }}</button>
        </td>
      </template>
    </tr>
  </table>
</template>

<script lang="ts">
import { UserInfo } from '@/interfaces/api.interface';
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  data() {
    return {
      activeId: '',
      nameToEdit: '',
      lastnameToEdit: '',
    };
  },
  props: {
    nameCol: {
      required: true,
      type: String,
    },
    lastnameCol: {
      required: true,
      type: String,
    },
    editButtonTitle: {
      required: true,
      type: String,
    },
    removeButtonTitle: {
      required: true,
      type: String,
    },
    saveButtonTitle: {
      required: true,
      type: String,
    },
    cancelButtonTitle: {
      required: true,
      type: String,
    },
  },
  computed: {
    ...mapState(['users']),
  },
  created(): void {
    this.getUsers();
  },
  methods: {
    ...mapActions(['getUsers', 'removeUser', 'editUser']),
    removeUserFromTable(userId: string): void {
      this.removeUser(userId);
    },
    editUserInTable(userInfo: UserInfo): void {
      if (userInfo.id !== this.activeId) {
        this.activeId = userInfo.id;
        this.nameToEdit = userInfo.name;
        this.lastnameToEdit = userInfo.lastname;
      } else {
        this.emptyActiveEdit();
      }
    },
    saveUserChanges(userInfo: UserInfo): void {
      const newUserInfo = {
        id: userInfo.id,
        name: this.nameToEdit,
        lastname: this.lastnameToEdit,
      };

      this.editUser(newUserInfo);
      this.emptyActiveEdit();
    },
    emptyActiveEdit(): void {
      this.activeId = '';
      this.nameToEdit = '';
      this.lastnameToEdit = '';
    },
  },
});
</script>
