<template>
  <AddUserForm
    :formTitle="addUserFormTitle"
    :nameInputPlaceholder="userNamePlaceholder"
    :lastnameInputPlaceholder="userLastnamePlaceholder"
    :buttonTitle="buttonTitle"
  />
  <UsersTable 
    :nameCol="userNameCol"
    :lastnameCol="userLastnameCol"
    :editButtonTitle="editButtonTitle"
    :removeButtonTitle="removeButtonTitle"
    :saveButtonTitle="saveButtonTitle"
    :cancelButtonTitle="cancelButtonTitle"
  />
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
	USER_NAME_FIELD,
	USER_LASTNAME_FIELD,
  EDIT_TABLE_ROW_BUTTON,
  REMOVE_TABLE_ROW_BUTTON,
  SAVE_USER_BUTTON,
  CANCEL_BUTTON,
} from '@/constants/constants';

export default defineComponent({
  data() {
    return {
      addUserFormTitle: ADD_USER_FORM_TITLE,
      userNamePlaceholder: USER_NAME_INPUT_PLACEHOLDER,
      userLastnamePlaceholder: USER_LASTNAME_INPUT_PLACEHOLDER,
      buttonTitle: ADD_USER_BUTTON,
      userNameCol: USER_NAME_FIELD,
      userLastnameCol: USER_LASTNAME_FIELD,
      editButtonTitle: EDIT_TABLE_ROW_BUTTON,
      removeButtonTitle: REMOVE_TABLE_ROW_BUTTON,
      saveButtonTitle: SAVE_USER_BUTTON,
      cancelButtonTitle: CANCEL_BUTTON,
    };
  },
  components: {
    AddUserForm,
    UsersTable,
  },
});
</script>
