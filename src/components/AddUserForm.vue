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
		>
			{{ buttonTitle }}
		</button>
	</form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from "@/models/user.model";
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
			const userInfo = new User(this.name, this.lastname);

			this.saveUser(userInfo);
		},
	},
});
</script>