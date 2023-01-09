<script>
  import Card from "./lib/Card.svelte";
  import Button from "./lib/Button.svelte";
  import Code from "./lib/Code.svelte";
</script>

<h3>
  <Code>&lt;svelte:fragment&gt;</Code>, que es un elemento que no se renderiza
  en el DOM
</h3>

<Card>
  <h2 slot="title">Card con botones</h2>
  <p>Contenido increíble</p>
  <svelte:fragment slot="after">
    <Button>Share card</Button>
    <Button>Like card</Button>
  </svelte:fragment>
</Card>
