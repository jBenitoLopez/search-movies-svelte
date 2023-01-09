<script>
  import Increment from "./IncrementStore.svelte";
  import { count } from "./stores.js";

  let currentCount = $count;
</script>

<h1>Contador: {currentCount}</h1>
<Increment />
