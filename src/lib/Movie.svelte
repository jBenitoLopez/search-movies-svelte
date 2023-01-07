<script>
  export let title;
  export let year;
  export let poster;
</script>

<article>
  <h3>{title} ({year})</h3>
  <img alt={title} src={poster} />
</article>
