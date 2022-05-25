<script context="module">
  import Card from "../components/Card.svelte";
  export async function preload({ params, query }) {
    const res = await this.fetch(
      `https://api.github.com/users/${params.slug}/repos`
    );
    const userRes = await this.fetch(
      `https://api.github.com/users/${params.slug}`
    );

    if (res.status === 200 && userRes.status === 200) {
      const data = await res.json();
      const userData = await userRes.json();
      return {
        repos: data,
        userDetails: userData,
      };
    } else {
      this.error(res.status, res.message);
    }
  }
</script>

<script>
  import UserDetails from "../components/UserDetails.svelte";

  export let repos;
  export let userDetails;
</script>

<div class="container">
  <div class="user-details">
    <h1>User details</h1>
    <UserDetails {userDetails} />
  </div>
  <div class="repos">
    <h1>List of Respoitories</h1>
    <div class="repos-container">
      {#each repos as repo}
        <Card {repo} />
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;
    width: 100%;
    height: 100%;
  }
  .user-details {
    background-color: #f7f7f7;
    padding: 20px;
  }
  .repos {
    background-color: rgb(233, 213, 213);
    padding: 20px;
  }
  .repos-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }

  h1 {
    text-align: center;
    padding: 0.5rem;
    border-bottom: 1px solid grey;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
</style>
