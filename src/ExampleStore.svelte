<script>
  import { onDestroy } from "svelte";
  import Increment from "./IncrementStore.svelte";
  import { count } from "./stores.js";

  let currentCount = 0;

  count.subscribe((value) => {
    currentCount = value;
  });

  // El método subscribe nos devuelve una forma
  // de limpiar la suscripción
  const unsubscribe = count.subscribe((value) => {
    currentCount = value;
  });

  // Al desmontar el componente, limpiamos la suscripción
  onDestroy(() => unsubscribe());
</script>

<h1>Contador: {currentCount}</h1>
<Increment />
