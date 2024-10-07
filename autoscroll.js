document.addEventListener("keydown", scroll);

let page = 0

function scroll(e) {
  if (e.code.toString() == "ArrowRight") {
    page++
  } else if (e.code.toString() == "ArrowLeft") {
    page--
  }

  console.log(page)
  document.getElementsByTagName("p")[page].scrollIntoView({behavior: "instant"})
}
