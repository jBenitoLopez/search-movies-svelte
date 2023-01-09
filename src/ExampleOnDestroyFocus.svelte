<script>
    import { onDestroy } from "svelte";

   const prevFocusedElement = typeof document !== 'undefined' && document.activeElement
  
   if (prevFocusedElement) {
   onDestroy(() => { prevFocusedElement.focus() )
   }
</script>
