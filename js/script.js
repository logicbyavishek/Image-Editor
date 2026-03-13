let filters = {
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
}

const imageCanvas = document.querySelector("#image-canvas")
const imageInput = document.querySelector("#imageInput")
const canvasCTX = imageCanvas.getContext("2d")
const ResetBtn = document.querySelector("#reset-btn")
const DownloadBtn = document.querySelector("#download-btn")
const PresetContainer = document.querySelector(".preset-btn")
let file = null
let image = null

const filtersContainers = document.querySelector(".filters")

function createFilterElement(name, unit = "%", value, min, max) {
  const div = document.createElement("div");
  div.classList.add("filter");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;
  input.id = name;

  const p = document.createElement("p");
  p.innerText = name;

  div.appendChild(p);
  div.appendChild(input);

  input.addEventListener("input", (e) => {
    filters[name].value = input.value;
    applyFilters();
  });

  return div;
}

function createfilters() {
  Object.keys(filters).forEach((key) => {
    const filterElement = createFilterElement(
      key,
      filters[key].unit,
      filters[key].value,
      filters[key].min,
      filters[key].max,
    );
    filtersContainers.appendChild(filterElement);
  })
}

createfilters()

imageInput.addEventListener("change", (event) => {
  file = event.target.files[0];
  const imagePlaceHolder = document.querySelector(".placeholder");
  imagePlaceHolder.style.display = "none";
  imageCanvas.style.display = "block";

  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = () => {
    image = img;
    imageCanvas.width = img.width;
    imageCanvas.height = img.height;
    canvasCTX.drawImage(img, 0, 0);
  };
});

function applyFilters() {
  if (!image) return;

  canvasCTX.clearRect(0, 0, imageCanvas.width, imageCanvas.height);

  canvasCTX.filter =
    `brightness(${filters.brightness.value}${filters.brightness.unit}) contrast(${filters.contrast.value}${filters.contrast.unit}) saturate(${filters.saturation.value}${filters.saturation.unit}) hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit}) blur(${filters.blur.value}${filters.blur.unit}) grayscale(${filters.grayscale.value}${filters.grayscale.unit}) sepia(${filters.sepia.value}${filters.sepia.unit}) opacity(${filters.opacity.value}${filters.opacity.unit}) invert(${filters.invert.value}${filters.invert.unit})
  `.trim();

  canvasCTX.drawImage(image, 0, 0);
}

ResetBtn.addEventListener("click", () => {
  filters = {
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
  applyFilters()
  filtersContainers.innerHTML=""
  createfilters()
});

DownloadBtn.addEventListener("click",()=>{
  const Link = document.createElement("a")
  Link.download = "edited-image.webp"
  Link.href = imageCanvas.toDataURL()
  Link.click()
})

let presets = {

  normal: {
    brightness: 100,
    contrast: 100,
    saturation: 100,
    hueRotation: 0,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  vintage: {
    brightness: 110,
    contrast: 90,
    saturation: 80,
    hueRotation: 10,
    blur: 0,
    grayscale: 10,
    sepia: 40,
    opacity: 100,
    invert: 0
  },

  cyberpunk: {
    brightness: 120,
    contrast: 140,
    saturation: 160,
    hueRotation: 260,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  noir: {
    brightness: 90,
    contrast: 120,
    saturation: 0,
    hueRotation: 0,
    blur: 0,
    grayscale: 100,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  warm: {
    brightness: 110,
    contrast: 105,
    saturation: 120,
    hueRotation: 15,
    blur: 0,
    grayscale: 0,
    sepia: 20,
    opacity: 100,
    invert: 0
  },

  cold: {
    brightness: 100,
    contrast: 110,
    saturation: 90,
    hueRotation: 180,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    opacity: 100,
    invert: 0
  },

  dreamy: {
    brightness: 115,
    contrast: 90,
    saturation: 110,
    hueRotation: 0,
    blur: 4,
    grayscale: 0,
    sepia: 10,
    opacity: 100,
    invert: 0
  },

  dramatic: {
    brightness: 95,
    contrast: 160,
    saturation: 120,
    hueRotation: 0,
    blur: 0,
    grayscale: 10,
    sepia: 0,
    opacity: 100,
    invert: 0
  }

}

Object.keys(presets).forEach((name)=>{
  const presetbutton = document.createElement("button")
  presetbutton.classList.add("btn")
  presetbutton.innerText = name
  PresetContainer.appendChild(presetbutton)

  presetbutton.addEventListener("click",()=>{
    const preset = presets[name]

    Object.keys(preset).forEach(filterName=>{
      filters[filterName].value = preset[filterName]
    })
    applyFilters()
    filtersContainers.innerHTML=""
    createfilters()
  })
})