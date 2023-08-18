function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //  html.classList.add("light")
  // }
  //}

  html.classList.toggle("light") //faz a mesma coisa que o codigo acima

  //pegar a tag img

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Mobile/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/Mobile/Avatar.png")
  }
}
