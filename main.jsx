function handleClickEvent(tile) {
    let position = tile.getAttribute("data-position")
    let img = document.createElement("img");
    img.src="x.png"
    tile.appendChild(img)

    console.log("you clicked " + position)
}