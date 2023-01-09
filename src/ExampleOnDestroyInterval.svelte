<script>
  import { onDestroy } from "svelte";

  let counter = 0;

  const interval = setInterval(() => {
    counter++;
  }, 1000);

  onDestroy(() => clearInterval(interval));
</script>

<p>Counter: {counter}</p>
