// Get references to the dropdown list and the button
const colorSelect = document.getElementById('colorSelect');
const removeButton = document.getElementById('removeButton');

// Add event listener to the button
removeButton.addEventListener('click', function() {
  // Get the selected color value
  const selectedColor = colorSelect.value;
  
  // Loop through all options in the dropdown
  for (let i = 0; i < colorSelect.options.length; i++) {
    // If the current option's value matches the selected color, remove it
    if (colorSelect.options[i].value === selectedColor) {
      colorSelect.remove(i);
      break; // Exit the loop once the color is removed
    }
  }
});
