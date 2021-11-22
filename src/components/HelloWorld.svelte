<script lang="ts">
    export let msg: string;

    let count = 0;

    const increase = () => {
        count++;
    };
</script>

<h1>{msg}</h1>
<button class="btn btn-primary" on:click={increase}>Count: {count}</button>
