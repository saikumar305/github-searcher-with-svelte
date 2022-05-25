<script>
  import { goto } from "@sapper/app";
  export let searchValue = "saikumar305";
  const handleSubmit = () => {
    goto(`/${searchValue}`);
  };
</script>

<div class="container">
  <!-- <div class="icon">
    <i class="fa fa-user" />
  </div> -->
  <div class="form-container">
    <form on:submit|preventDefault={handleSubmit}>
      <input type="text" placeholder="Search" bind:value={searchValue} />
      <button type="submit"> <i class="fa fa-search" /> Search </button>
    </form>
  </div>
</div>

<style>
  .container {
    display: grid;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: url("https://www.zdnet.com/a/img/resize/baa96fa8b98d59569ce375f70b7fc5e6e080fbd6/2018/10/18/580b4d43-4060-4d90-be23-1f97ef795e4e/github-logo.png?width=1200&fit=bounds&format=pjpg&auto=webp")
      no-repeat center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .icon {
    display: grid;
    place-items: center;
    padding-bottom: 1rem;
    font-size: 10rem;
    color: #7f847a;
  }
  input {
    width: 100%;
    padding: 10px 0;
    margin-top: 10px;
    border: none;
    border-bottom: 5px solid rgb(255, 255, 255);
    text-align: center;
    background-color: transparent;
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
  }
  input:focus {
    outline: none;
    border-bottom: 5px solid #8584dd;
  }
  button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    background-color: transparent;
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    cursor: pointer;
    border: 3px solid rgb(255, 255, 255);
  }
</style>
