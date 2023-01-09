<script>
  import { afterUpdate } from "svelte";

  let data = [
    {
      title: "Tarea 1",
    },
    {
      title: "Tarea 2",
    },
    {
      title: "Tarea 3",
    },
  ];

  const addNew = () => {
    data = [...data, { title: "Nueva tarea" }];
  };

  afterUpdate(() => {
    // Hacemos scroll automático al último elemento del DOM
    // si no está en el scroll
    document.querySelector("ul").lastElementChild.scrollIntoView();
  });
</script>

<button on:click={addNew}>Add new item</button>
<ul>
  {#each data as item}
    <li>{item.title}</li>
  {/each}
</ul>
