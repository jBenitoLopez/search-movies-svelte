<script>
  import Search from "./lib/Search.svelte";
  import Movies from "./lib/Movies.svelte";

  const API_URL = "https://www.omdbapi.com/?apikey=39b5df46";

  let promise;
  let searchInput = "";

  const handleSubmit = (value) => {
    if (value.length <= 2) {
      alert("Introduce más de 2 letras para buscar");
      return;
    }
    searchInput = value;
  };

  const fetchMovies = async (search) => {
    const response = await fetch(`${API_URL}&s=${search}`);
    if (!response.ok) return [];

    const json = await response.json();
    const { Response, Search } = await json;

    // hacemos la validación y mapeo de los
    // datos en este punto
    if (Response === "False") return [];

    return Search.map(({ Title, Year, Poster }) => ({
      title: Title,
      year: Year,
      poster: Poster,
    }));
  };

  // declaración reactiva que debe ejecutarse cada vez
  // que cambia el searchInput
  $: if (searchInput.length > 2) {
    promise = fetchMovies(searchInput);
  }
</script>

<main>
  <Search onSubmit={handleSubmit} />

  {#await promise}
    <p>Cargando...</p>
  {:then movies}
    <Movies {movies} />
  {/await}
</main>
