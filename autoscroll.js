document.addEventListener("keydown", scroll);

let page = 0

function scroll(e) {
  if (e.code.toString() == "ArrowRight") {
    page++
  } else if (e.code.toString() == "ArrowLeft") {
    page--
  }

  if (page >= document.getElementsByTagName("p").length) {
    page = 0
  } else if (page < 0) {
    page = document.getElementsByTagName("p").length - 1
  }

  console.log(page)
  document.getElementsByTagName("p")[page].scrollIntoView({behavior: "instant"})
}
