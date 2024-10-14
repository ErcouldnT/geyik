<script lang="ts">
	import { Rabbit } from 'lucide-svelte';
</script>

<main class="flex flex-col gap-4 p-10">
	<label class="label">
		<span>Email</span>
		<input class="input" type="text" placeholder="Email" />
	</label>
	<label class="label">
		<span>Parola</span>
		<input class="input" type="password" placeholder="********" />
	</label>
	<a href="/chat" type="button" class="btn variant-filled-primary">
		<p>...</p>
		<Rabbit />
	</a>
</main>
