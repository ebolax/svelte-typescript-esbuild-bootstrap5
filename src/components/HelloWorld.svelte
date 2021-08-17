<script lang="ts">

    export let msg: string;

    let count = 0;

    let increase = () =>
    {
        count++;
    };

</script>

<h1>{ msg }</h1>
<button class="btn btn-primary" on:click={increase}>Counter: {count}</button>