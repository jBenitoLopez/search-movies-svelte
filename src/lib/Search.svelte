<script>
  let value = "";
  export let onSubmit;
</script>

<form on:submit|preventDefault={() => onSubmit(value)}>
  <label>
    <span>Introduce tu película:</span>
    <input name="movie" placeholder="Avengers, The Matrix, etc." bind:value />
  </label>
  <button type="submit">Buscar película</button>
</form>
<hr />

<style>
  label > span {
    margin-right: 1rem;
  }
  label > input {
    margin-right: 1rem;
    padding: 0.5rem;
  }
</style>
