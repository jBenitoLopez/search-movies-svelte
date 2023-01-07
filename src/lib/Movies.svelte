<script>
  import Movie from "./Movie.svelte";

  export let movies;
</script>

{#if movies?.length === 0}
  <p>No hay resultados</p>
{:else if movies?.length}
  {#each movies as movie}
    <Movie {...movie} />
  {/each}
{:else}
  <p>Usa el formulario para buscar una película</p>
{/if}
