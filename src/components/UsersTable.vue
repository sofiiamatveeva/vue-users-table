<template>
  <table>
    <head></head>
    <tr>
      <th>{{ nameCol }}</th>
      <th>{{ lastnameCol }}</th>
    </tr>
    <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.lastname }}</td>
        <td>
          <button type="button">{{ editButtonTitle }}</button>
          <button type="button">{{ removeButtonTitle }}</button>
        </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';

export default defineComponent({
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
    }
  },
  computed: {
    ...mapState(['users']),
  },
});
</script>
