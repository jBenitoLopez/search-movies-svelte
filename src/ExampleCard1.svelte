<script>
  import Card from "./lib/Card.svelte";
</script>

<Card>
  <p>Contenido de la card</p>
  <footer slot="after">Pie de la card</footer>
</Card>

<Card>
  <img
    slot="image"
    src="../src/assets/img_avatar2.png"
    alt="Avatar"
    style="width:100%"
  />
  <h2 slot="title">Título de la Card</h2>
  <p>Nuevo Contenido de la card</p>
  <footer slot="after">Pie de la card</footer>
</Card>
