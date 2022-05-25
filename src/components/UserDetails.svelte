<script>
  export let userDetails;
</script>

<div class="container">
  <div>
    <img src={userDetails.avatar_url} alt="" />
  </div>
  <div>
    <h2>{userDetails.name}</h2>
  </div>
  <div>
    <p>{userDetails.bio}</p>
  </div>
  <div>
    type: {userDetails.type}
  </div>
  <div>
    <i class="fa-solid fa-location-dot" />
    {userDetails.location}
  </div>
  <div>
    Repositories: {userDetails.public_repos}
  </div>
  <div>
    followers: {userDetails.followers}
  </div>

  <a href={userDetails.html_url}><i class="fa-brands fa-github" />Github</a>
  <span>
    <i class="fa-brands fa-twitter" />
    {userDetails.twitter_username || "N/A"}
  </span>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 600px;
    padding: 1rem 0.5rem;
    background-color: #e6f5f0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  i {
    padding: 0 5px;
  }
</style>
