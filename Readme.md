# Image Editor (Canvas Based)

A lightweight browser-based image editor built using **HTML, CSS, and JavaScript**.  
The application allows users to upload an image, apply multiple visual filters in real time using the **HTML5 Canvas API**, and download the edited image.

The editor dynamically generates filter controls and provides predefined presets for quick styling.

---

## Features

- Upload images directly from the local system
- Real-time image manipulation using Canvas
- Adjustable filter controls
- Multiple preset styles
- Reset filters to default values
- Download the edited image
- Responsive layout

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- HTML5 Canvas API

---

## Project Structure

```

image-editor/
│
├── index.html
├── css/
│   ├── styles.css
│   └── theme.css
│
├── js/
│   └── script.js
│
└── README.md

```

---

## Application Architecture

The editor follows a simple modular structure:

### 1. UI Layer
Handles layout, user inputs, and rendering.

- Image upload button
- Filter sliders
- Preset buttons
- Reset and download controls

Defined in **index.html** and styled with **styles.css** and **theme.css**.  
The interface uses a two-column layout separating the canvas editor and filter controls. :contentReference[oaicite:0]{index=0}

---

### 2. Theme System

The project defines reusable CSS variables for colors, spacing, typography, and layout consistency.

Example variables include:

- Background colors
- Text colors
- Padding and margin scales
- Border radius
- Font sizes

This is implemented in the theme configuration. :contentReference[oaicite:1]{index=1}

---

### 3. Image Processing Layer

All image processing is handled through the **CanvasRenderingContext2D API**.

Workflow:

1. User uploads an image
2. Image is drawn onto a canvas
3. Selected filters are applied
4. Canvas is redrawn with updated filter values

Filters are applied using the `canvasCTX.filter` property before drawing the image again. :contentReference[oaicite:2]{index=2}

---

### 4. Dynamic Filter System

Filters are defined in a configuration object:

```

brightness
contrast
saturation
hueRotation
blur
grayscale
sepia
opacity
invert

```

Each filter includes:

```

min
max
value
unit

```

The UI sliders are generated dynamically based on this configuration. :contentReference[oaicite:3]{index=3}

---

### 5. Preset Filters

Preset styles automatically update multiple filter values simultaneously.

Available presets include:

- normal
- vintage
- cyberpunk
- noir
- warm
- cold
- dreamy
- dramatic

Each preset maps to a predefined filter configuration.

---

## How It Works

### Upload Image

The user selects an image file, which is loaded into an `Image` object and rendered on the canvas.

### Apply Filters

When a slider value changes:

1. The filter value is updated
2. Canvas is cleared
3. Filters are applied
4. Image is redrawn

### Reset

Resets all filter values to their default settings.

### Download

The edited image is exported using:

```

canvas.toDataURL()

```

and downloaded as a WebP image.

---

## Running the Project

1. Clone the repository

```

git clone [https://github.com/logicbyavishek/Image-Editor.git)

```

2. Open the project folder

3. Run the application by opening

```

index.html

```

in a web browser.

No build tools or dependencies are required.

---

## Future Improvements

Potential enhancements for the editor:

- Crop and rotate tools
- Drag and zoom canvas
- Multiple image layers
- Undo / redo history
- Mobile gesture support
- Advanced filters (LUT, color curves)
- WebGL acceleration for better performance

---

## License

This project is open source and available under the MIT License.
```

---
