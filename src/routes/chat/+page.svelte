<script lang="ts">
	import { onMount } from 'svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Leaf } from 'lucide-svelte';

	let inputText: string = '';
	let inputEl: HTMLInputElement;

	const users = ['ahmet', 'mehmet', 'ozan', 'erkut'];

	let activeMessages = ['selam', 'as', 'naber'];

	const saySomething = (event: Event) => {
		event.preventDefault();

		if (inputText.trim() === '') return;

		activeMessages = [...activeMessages, inputText];
		inputText = '';

		inputEl.focus();
	};

	onMount(() => {
		inputEl.focus();
	});
</script>

<main class="rounded h-screen w-screen">
	<div class="flex flex-row gap-5 p-5">
		{#each users as user}
			<div class="flex flex-col justify-center items-center cursor-pointer">
				<Avatar
					src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
					width="w-8"
					rounded="rounded-full"
				/>
				<p class="text-sm">{user}</p>
			</div>
		{/each}
	</div>

	<div class="h-full w-full">
		<div class="p-5">
			{#each activeMessages as msg}
				<p class="text-right">{msg}</p>
			{/each}
		</div>

		<form on:submit={saySomething} class="absolute bottom-0 w-screen p-5">
			<label class="label flex">
				<input
					bind:this={inputEl}
					bind:value={inputText}
					class="input"
					type="text"
					placeholder="..."
				/>
				<button class="flex justify-center items-center btn">
					<Leaf />
				</button>
			</label>
		</form>
	</div>
</main>
