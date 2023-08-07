<template>
	<form>
		<legend>{{ formTitle }}</legend>
		<input type="text" v-model="name" :placeholder="nameInputPlaceholder" />
		<input type="text" v-model="lastname" :placeholder="lastnameInputPlaceholder" />
		<button type="submit" @click.prevent="addUser">{{ buttonTitle }}</button>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import User from '@/models/user.model';
import { mapActions } from 'vuex';

export default defineComponent({
	data() {
		return {
			name: '',
			lastname: '',
		};
	},
	props: {
		formTitle: {
			required: true,
			type: String,
		},
		nameInputPlaceholder: {
			required: true,
			type: String,
		},
		lastnameInputPlaceholder: {
			required: true,
			type: String,
		},
		buttonTitle: {
			required: true,
			type: String,
		},
	},
	methods: {
		...mapActions(['saveUser']),
		addUser(): void {
			const userInfo = new User(this.name, this.lastname);

			this.saveUser(userInfo);
		},
	},
});
</script>