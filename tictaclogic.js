document.getElementById("box").addEventListener("click", onClick(tile))

function onClick(tile) {
    let position = tile.getAttribute("box")
    console.log("you clicked" + position)
}