<template>
	<form class="border rounded p-5 mb-10">
		<legend class="text-lg mb-5">{{ formTitle }}</legend>
		<input
			class="outline-none mr-4 border rounded p-2"
			type="text"
			v-model="name"
			:placeholder="nameInputPlaceholder"
		/>
		<input
			class="outline-none mr-4 border rounded p-2"
			type="text"
			v-model="lastname"
			:placeholder="lastnameInputPlaceholder"
		/>
		<button
			class="border rounded p-2 bg-amber-200"
			type="submit"
			@click.prevent="addUser"
			:disabled="!name.trim().length || !lastname.trim().length"
		>
			{{ buttonTitle }}
		</button>
	</form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
	data() {
		return {
			name: "",
			lastname: "",
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
		...mapActions(["saveUser"]),
		addUser(): void {
			const userInfo = {
				name: this.name,
				lastname: this.lastname,
			};

			this.name = '';
			this.lastname = '';

			this.saveUser(userInfo);
		},
	},
});
</script>