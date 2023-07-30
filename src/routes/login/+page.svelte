<script lang="ts">
	import { goto } from '$app/navigation';
	import { backend_urls, generateBackendUrl } from '$config/backend';
	import { urls } from '$config/routes';
	import axios from 'axios';

	async function login() {
		const loginInfo = {
			nickname: username,
			password
		};

		return axios
			.post(generateBackendUrl(backend_urls.login), JSON.stringify(loginInfo))
			.then((res: any) => {
				goto(urls.root);
			});
	}

	let username = 'Gorn10';
	let password = 'password';
</script>

<form on:submit={login} class="flex flex-col items-center gap-5 m-5">
	<h1>Login and enjoy CodinCod!</h1>

	<a class="button" href={urls.register}>register</a>

	<div class="flex flex-col">
		<label class="sr-only" for="username">username</label>
		<input type="text" id="username" bind:value={username} placeholder="username" required />
	</div>
	<div class="flex flex-col">
		<label class="sr-only" for="password">password</label>
		<input type="password" id="password" bind:value={password} placeholder="password" required />
	</div>

	<button class="button" type="submit">login!</button>
</form>
