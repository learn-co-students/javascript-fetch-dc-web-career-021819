const app = "I don't do much.";

const token = '7f6ee2cdf1c424b0bebe50ba21c8db4bbfa4099d'
fetch('https://api.github.com/user/repos'), {headers:
  {Authorization: `token: ${token}`}
})
.then(res => res.json())
.then(json) => console.log(json);
