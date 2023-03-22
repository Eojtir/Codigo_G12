const userName = document.querySelector("#usuario");
const userAvatar = document.querySelector("#avatar");
const fullName = document.querySelector("#name");
const theUserName = document.querySelector(".username")
const userAbout = document.querySelector(".about");
const userRepositori = document.querySelector("#repos");
const userFollow = document.querySelector("#follow");
const userFollowing = document.querySelector("#following");
const userState = document.querySelector("#state");
const userTwitter = document.querySelector("#twitter");
const userGitHut = document.querySelector(".githut");
const userCreate= document.querySelector(".date")

async function showInfo(){
  if(!userName) return;
const response = await fetch(`https://api.github.com/users/${userName.value}`);
const dataUser = await response.json();
userAvatar.src=dataUser.avatar_url;
fullName.textContent=dataUser.name;
theUserName.textContent=`@ ${dataUser.login}`;
userAbout.textContent = dataUser.bio != null ? `${dataUser.bio}`:"Not Avaibable";
userFollow.textContent=dataUser.followers;
userFollowing.textContent=dataUser.following;
userRepositori.textContent=dataUser.public_repos;
userState.textContent=dataUser.location;
userGitHut.textContent=dataUser.html_url;
if(dataUser.twitter_username != null) userTwitter.textContent= dataUser.twitter_username;
const initDate = new Date(dataUser.created_at);
userCreate.textContent= `Joined ${initDate.toDateString()}`;




console.log(dataUser);
}