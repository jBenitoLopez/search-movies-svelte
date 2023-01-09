<article class="card">
  <slot name="image"
    ><img
      src="../src/assets/img_avatar.png"
      alt="Avatar"
      style="width:100%"
    /></slot
  >
  <header>
    <slot name="title"><h3>Título por definir</h3></slot>
  </header>
  <div class="content">
    <slot />
  </div>
  <slot name="after" />
</article>

<style>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .content {
    padding: 2px 16px;
  }
</style>
