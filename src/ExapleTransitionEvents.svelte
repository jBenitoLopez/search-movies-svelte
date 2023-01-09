<script>
  import { fade } from "svelte/transition";

  let visible = true;
  let status = "";
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  Mostrar texto
</label>

{#if visible}
  <p
    transition:fade={{ duration: 1000 }}
    on:introstart={() => (status = "intro empieza")}
    on:introend={() => (status = "intro termina")}
    on:outrostart={() => (status = "salida empieza")}
    on:outroend={() => (status = "salida termina")}
  >
    Este texto aparecerá o desaparecerá
  </p>
{/if}
<strong>Estado de la animación: {status}</strong>
