let time = 5.0; // Time variable
let detailSlider; // Slider to control the detail level

function setup() {
  createCanvas(800, 800); // Increased canvas size for more detail
  detailSlider = createSlider(10, 150, 10); // Create a slider with values from 10 to 100, starting at 20
  detailSlider.position(20, height + 10); // Position the slider
}

function draw() {
  background(0,0); // Background color

  // Create a grid of points and apply Perlin noise to their heights
  let rows = detailSlider.value(); // Use the slider value for rows
  let cols = detailSlider.value(); // Use the slider value for columns
  let spacingX = width / cols;
  let spacingY = height / rows;

  for (let y = 0; y < height; y += spacingY) {
    for (let x = 0; x < width; x += spacingX) {
      // Calculate the height using Perlin noise and time
      let yOffset = map(noise(x * 0.01, y * 0.01, time), 0, 1, -20, 20); // Adjusted range
      let waveHeight = cos(time + x * 0.02 + y * 0.02) * 20; // Adjusted amplitude
      let finalHeight = yOffset + waveHeight;

      // Create a gradient of blue colors
      let blueShade = map(finalHeight, -20, 20, 100, 255);
      fill(0, 0, blueShade);

      // Draw detailed rectangles at each point
      noStroke();
      rect(x, y + finalHeight, spacingX, spacingY);
    }
  }

  // Increment time for animation
  time += 0.1; // Adjusted time increment for smoother animation

}

