<script lang="ts">
	import Nav from "@/components/nav/nav.svelte";

	import { onMount } from "svelte";

	// // On page load or when changing themes, best to add inline in `head` to avoid FOUC
	onMount(() => {
		if (
			localStorage.getItem("color-theme") === "dark" ||
			(!("color-theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	});
</script>

<Nav />

<div class="dark:bg-primary-900 dark:text-primary-100 min-h-screen">
	<slot />
</div>
