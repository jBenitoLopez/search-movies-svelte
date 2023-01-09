<script>
  import { count } from "./stores.js";

  const handleIncrement = () => {
    // Actualizamos el valor del store count
    // Usamos el método update que recibe
    // una función con el valor anterior y
    // devolvemos el nuevo valor
    count.update((n) => n + 1);
  };
</script>

<button on:click={handleIncrement}> Incrementar </button>
