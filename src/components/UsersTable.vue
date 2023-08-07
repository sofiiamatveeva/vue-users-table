<template>
	<table>
		<thead>
			<th>{{ nameCol }}</th>
			<th>{{ lastnameCol }}</th>
		</thead>
		<tr v-for="user in users" :key="user.id">
			<template v-if="activeId === user.id">
				<td width=300 class="border-r px-2">
					<input class="border rounded px-1" type="text" v-model="nameToEdit" />
				</td>
				<td width=300 class="px-2">
          <input class="border rounded px-1" type="text" v-model="lastnameToEdit" />
        </td>
				<td width=300>
					<button
						class="rounded p-2 mr-1 bg-green-100"
						type="button"
						@click="saveUserChanges(user)"
					>
						{{ saveButtonTitle }}
					</button>
					<button
						class="rounded p-2 bg-gray-100"
						type="button"
						@click="editUserInTable(user)"
					>
						{{ cancelButtonTitle }}
					</button>
				</td>
			</template>
			<template v-else>
				<td width=300 class="border-r px-2">{{ user.name }}</td>
				<td width=300 class="px-2">{{ user.lastname }}</td>
				<td width=300>
					<button
						class="rounded p-2 mr-1 bg-blue-100"
						type="button"
						@click="editUserInTable(user)"
					>
						{{ editButtonTitle }}
					</button>
					<button
						class="rounded p-2 bg-red-100"
						type="button"
						@click="removeUserFromTable(user.id)"
					>
						{{ removeButtonTitle }}
					</button>
				</td>
			</template>
		</tr>
	</table>
</template>

<script lang="ts">
import { UserInfo } from "@/interfaces/api.interface";
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
	data() {
		return {
			activeId: "",
			nameToEdit: "",
			lastnameToEdit: "",
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
		...mapState(["users"]),
	},
	created(): void {
		this.getUsers();
	},
	methods: {
		...mapActions(["getUsers", "removeUser", "editUser"]),
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
			this.activeId = "";
			this.nameToEdit = "";
			this.lastnameToEdit = "";
		},
	},
});
</script>
