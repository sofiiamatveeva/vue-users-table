<template>
  <AddUserForm
    :formTitle="addUserFormTitle"
    :nameInputPlaceholder="userNamePlaceholder"
    :lastnameInputPlaceholder="userLastnamePlaceholder"
    :buttonTitle="buttonTitle"
  />
  <UsersTable />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddUserForm from '@/components/AddUserForm.vue';
import UsersTable from '@/components/UsersTable.vue';
import { 
  ADD_USER_FORM_TITLE,
  USER_NAME_INPUT_PLACEHOLDER,
  USER_LASTNAME_INPUT_PLACEHOLDER,
  ADD_USER_BUTTON,
} from '@/constants/constants';

export default defineComponent({
  data() {
    return {
      addUserFormTitle: ADD_USER_FORM_TITLE,
      userNamePlaceholder: USER_NAME_INPUT_PLACEHOLDER,
      userLastnamePlaceholder: USER_LASTNAME_INPUT_PLACEHOLDER,
      buttonTitle: ADD_USER_BUTTON,
    };
  },
  components: {
    AddUserForm,
    UsersTable,
  },
});
</script>
