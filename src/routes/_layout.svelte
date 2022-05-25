<script>
  import Nav from "../components/Nav.svelte";

  // export let segment;
</script>

<div class="wrapper">
  <!-- <Nav {segment} /> -->

  <div class="layout">
    <main>
      <slot />
    </main>
    <footer><i class="fa-solid fa-copyright" /> by Sai kumar , 2022</footer>
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    background-color: coral;
    height: 100vh;
  }

  .layout {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas: "main" "footer";
    height: 100%;
  }
  main {
    grid-area: main;
    background-color: rgb(233, 213, 213);
  }
  footer {
    grid-area: footer;
    background-color: rgb(85, 55, 55);
    padding: 20px;
    text-align: center;
    color: yellow;
  }
</style>
