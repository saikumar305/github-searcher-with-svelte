const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: "github-searcher-with-svelte",
    user: {
      name: "saikumar305",
      email: "saikumarrachakonda305@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
