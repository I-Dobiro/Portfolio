const imageIds = [
    2747248,
    726478,
    3311083,
    5967796,
    8065516
]

for (const imageId of imageIds) {
    const image = document.createElement("img")
    image.alt = "Random duck image"
    image.width = 250
    image.height = 160
    image.src = `https://images.pexels.com/photos/${imageId}/pexels-photo-${imageId}.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
    document.body.appendChild(image)
}
