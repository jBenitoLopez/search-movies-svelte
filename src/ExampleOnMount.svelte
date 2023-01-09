<script>
  import { onMount } from "svelte";

  let data = [];

  // Se ejecuta justo después de que el componente se haya montado en el DOM
  onMount(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    data = await res.json();
  });
</script>

<ul>
  {#each data as item}
    <li>{item.title}</li>
  {/each}
</ul>
