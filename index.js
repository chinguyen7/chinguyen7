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
document.body.style.filter = "blur(1rem)";
  await sleep(70);

	document.getElementById("favs").style.display="none";
	document.getElementById("credits").style.display="none";

	document.getElementById("main").style.display="block";
  document.getElementById("homelink").style.textDecoration="none";

  document.getElementById("favslink").style.textDecoration="underline";
  document.getElementById("creditslink").style.textDecoration="underline";
await sleep(70);
   document.body.style.filter = "blur(1rem)";
     await sleep(70);
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

function cacheImages(array)
{
    if (!cacheImages.list) {
        cacheImages.list = [];
    }
    var list = cacheImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

cacheImages(["background.png" ]);
