<script lang="ts">

    import HelloWorld from "./components/HelloWorld.svelte";

    export let answer: number; // props'tan aldigi deger

    let message = "test message";

    const changeMessage = () =>
    {
        message = "message changed";
    }

</script>

<div class="container mt-5">
    <div class="row">
        <div class="col text-center">

            <img src="assets/img/svelte-logo.png" alt="" class="logo" />

            <HelloWorld msg="Svelte + Esbuild + Bootstrap 5 + Livereload"></HelloWorld>

            <p class="mt-2">Answer is: { answer }</p>

            <p class="mt-2">Message: { message }</p>

            <button class="btn btn-danger" on:click={changeMessage}>Change Message</button>
        </div>
    </div>
</div>

<style>
    .logo
    {
        max-width: 100px;
    }
</style>