<script lang="ts">
	import { urls } from '$config/routes';
	import { userObject } from '$routes/profile/mockprofiledata';
	import { isLoggedIn } from '$utils/getCookie';
</script>

<header>
	<nav class="bg-secondary-500 dark:bg-secondary-900 p-4">
		<div class="mx-auto flex flex-wrap items-center container flex-row gap-4">
			<a href="/" class="mr-auto">
				<span class="self-center whitespace-nowrap text-xl font-semibold text-white">CodinCod</span>
			</a>

			{#if isLoggedIn()}
				<ul>
					<!-- <p class="text-sm block">
					{userObject.username}
				</p> -->
					<li>
						<a href={urls.puzzle}>Puzzle</a>
					</li>
					<li>
						<a href={urls.profile}>Profile</a>
					</li>
					<li>
						<a href={urls.settings}>Settings</a>
					</li>
					<li>
						<a href={urls.logout}>Sign out</a>
					</li>
				</ul>

				<button>
					<img
						id="avatar-menu"
						class="rounded-full w-10 h-10 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
						src={userObject.avaterUrl}
						alt=""
					/>
				</button>
			{:else}
				<ul>
					<li><a href={urls.login}>Sign in</a></li>
				</ul>
			{/if}
		</div>
	</nav>
</header>
