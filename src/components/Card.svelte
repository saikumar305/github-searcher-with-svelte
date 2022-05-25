<script>
  export let repo;
</script>

<div class="card">
  <div class="card-header">
    <h3>{repo.name}</h3>
    <a href={repo.html_url} target="_blank"><i class="fa fa-link" /> </a>
  </div>
  <div class="card-body">
    <p>{repo.description || "No description available"}</p>
  </div>
  <div class="card-footer">
    <div>
      <i class="fa fa-star" />
      {repo.stargazers_count}
    </div>
    <div>
      <i class="fa fa-code-fork" />
      {repo.forks_count}
    </div>
    <div>
      <i class="fa fa-eye" />
      {repo.watchers_count}
    </div>
  </div>
</div>

<style>
  .card {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  .card-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem;
  }
  .card-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0.5rem;
    border-top: 1px solid #312f2f;
  }
</style>
