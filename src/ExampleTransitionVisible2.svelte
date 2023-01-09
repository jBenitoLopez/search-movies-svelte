<script>
  // importamos la transición de fundido
  import { fade, fly } from "svelte/transition";
  let visible = true;
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  Mostrar texto
</label>

{#if visible}
  <!-- con la directiva transition
   usamos la transición 'fade' -->
  <p transition:fade>Este texto aparece o desaparece con fundido</p>
{/if}

<hr />

<p transition:fade={{ duration: 5000 }}>
  Este texto aparece o desaparece con fundido 3 durante 5 segundos 4
</p>
<p>También puedes retrasar la transición usando la propiedad delay:</p>
<p transition:fade={{ delay: 1000, duration: 2000 }}>
  Este texto aparece o desaparece con fundido durante 2 segundos y un retraso de
  1 segundo
</p>
<hr />
<p transition:fly={{ x: 100, y: 200 }}>
  Este texto desde aparece desde 100px a la derecha y 200px desde abajo. Y al
  desaparecer se moverá allí.
</p>
