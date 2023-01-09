<script>
  import { onDestroy } from "svelte";

  let width = window.innerWidth;

  const handleResize = () => {
    width = window.innerWidth;
  };

  window.addEventListener("resize", handleResize);

  onDestroy(() => window.removeEventListener("resize", handleResize));
</script>
