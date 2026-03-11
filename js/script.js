const filters = {
  Brightness: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },
  Contrast: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },
  Exposure: {
    min: -100,
    max: 100,
    value: 0,
    unit: "%",
  },
  Saturation: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },
  HueRotation: {
    min: 0,
    max: 360,
    value: 0,
    unit: "deg",
  },
  Blur: {
    min: 0,
    max: 20,
    value: 0,
    unit: "px",
  },
  Grayscale: {
    min: 0,
    max: 100,
    value: 0,
    unit: "%",
  },
  Sepia: {
    min: 0,
    max: 100,
    value: 0,
    unit: "%",
  },
  Opacity: {
    min: 0,
    max: 100,
    value: 100,
    unit: "%",
  },
  Invert: {
    min: 0,
    max: 100,
    value: 0,
    unit: "%",
  },
};

const imageCanvas = document.querySelector("#image-canvas")
const imageInput = document.querySelector("#imageInput")
const canvasCTX = imageCanvas.getContext("2d")
let file = null 
let image = null

const filtersContainers = document.querySelector(".filters")

function createFilterElement(name,unit="%",value,min,max){
    const div = document.createElement("div")
    div.classList.add("filter")

    const input = document.createElement("input")
    input.type="range"
    input.min=min
    input.max=max
    input.value=value
    input.id=name

    const p = document.createElement("p")
    p.innerText=name

    div.appendChild(p)
    div.appendChild(input)

    return div
}

Object.keys(filters).forEach(key=>{
    const filterElement = createFilterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max)
    filtersContainers.appendChild(filterElement)
})

imageInput.addEventListener("change",(event)=>{
    file = event.target.files[0]
    const imagePlaceHolder = document.querySelector(".placeholder")
    imagePlaceHolder.style.display = "none"

    const img = new Image()
    img.src = URL.createObjectURL(file)

    img.onload=()=>{
        image=img
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        canvasCTX.drawImage(img,0,0)
    }
})