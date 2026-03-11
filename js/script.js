const filters = {
  brightness: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },
  contrast: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },
  saturation: {
    min: 0,
    max: 200,
    value: 100,
    unit: "%",
  },
  hueRotation: {
    min: 0,
    max: 360,
    value: 0,
    unit: "deg",
  },
  blur: {
    min: 0,
    max: 20,
    value: 0,
    unit: "px",
  },
  grayscale: {
    min: 0,
    max: 100,
    value: 0,
    unit: "%",
  },
  sepia: {
    min: 0,
    max: 100,
    value: 0,
    unit: "%",
  },
  opacity: {
    min: 0,
    max: 100,
    value: 100,
    unit: "%",
  },
  invert: {
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

    input.addEventListener("input",(e)=>{
      filters[name].value=input.value
      applyFilters(name,unit)
    })

    return div
}

function createfilters(){
  Object.keys(filters).forEach(key=>{
      const filterElement = createFilterElement(key,filters[key].unit,filters[key].value,filters[key].min,filters[key].max)
      filtersContainers.appendChild(filterElement)
  })
}

createfilters()

imageInput.addEventListener("change",(event)=>{
    file = event.target.files[0]
    const imagePlaceHolder = document.querySelector(".placeholder")
    imagePlaceHolder.style.display = "none"
    imageCanvas.style.display="block"

    const img = new Image()
    img.src = URL.createObjectURL(file)

    img.onload=()=>{
        image=img
        imageCanvas.width = img.width
        imageCanvas.height = img.height
        canvasCTX.drawImage(img,0,0)
    }
})

function applyFilters(name,unit){ 
  canvasCTX.clearRect(0,0,imageCanvas.width,imageCanvas.height)
  canvasCTX.filter=`${name}(${filters[name].value}${unit})`.trim()
  canvasCTX.drawImage(image,0,0)
}