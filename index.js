function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayFavs() {
document.body.style.filter = "blur(1rem)";
  await sleep(70);
    document.getElementById("main").style.display="none";
    document.getElementById("credits").style.display="none";

    document.getElementById("favs").style.display="block";

  document.getElementById("favslink").style.textDecoration="none";

  document.getElementById("homelink").style.textDecoration="underline";
  document.getElementById("creditslink").style.textDecoration="underline";
 await sleep(70);
   document.body.style.filter = "blur(1rem)";
     await sleep(70);
  document.body.style.filter = "blur(0)";


}
async function displayMain() {

	document.getElementById("favs").style.display="none";
	document.getElementById("credits").style.display="none";

	document.getElementById("main").style.display="block";
  document.getElementById("homelink").style.textDecoration="none";

  document.getElementById("favslink").style.textDecoration="underline";
  document.getElementById("creditslink").style.textDecoration="underline";

  for (let i = 1; i <= 6; i+=2) {
    document.body.style.filter = "blur(" + (i*0.5).toString +"rem)";
    await sleep(50);
    }
   for (let i = 6; i <= 1; i-=2) {
    document.body.style.filter = "blur(" + (i*0.5).toString +"rem)";
    await sleep(50);
    }
    document.body.style.filter = "blur(0)";
}

async function displayCredits() {
document.body.style.filter = "blur(1rem)";
  await sleep(70);
   document.getElementById("favs").style.display="none";
	document.getElementById("main").style.display="none";

	document.getElementById("credits").style.display="block";
  document.getElementById("creditslink").style.textDecoration="none";

  document.getElementById("favslink").style.textDecoration="underline";
  document.getElementById("homelink").style.textDecoration="underline";
 await sleep(70);
   document.body.style.filter = "blur(1rem)";
     await sleep(70);
    document.body.style.filter = "blur(0)";
}