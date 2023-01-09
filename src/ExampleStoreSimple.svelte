<script>
  import Increment from "./IncrementStore.svelte";
  import { count } from "./stores.js";
</script>

<h1>Contador: {$count}</h1>
<Increment />
