<script>
  let visible = true;
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  Mostrar texto
</label>

{#if visible}
  <p>Este texto aparecerá o desaparecerá</p>
{/if}
