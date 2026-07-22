# Temperature Converter Web App

## Overview
A simple, client‑side temperature conversion tool built with HTML5, CSS3, and vanilla JavaScript. Users can enter a temperature value in Celsius, Fahrenheit, or Kelvin and instantly see the equivalent values in the other two scales.

## Files
- `index.html` – Markup structure (input fields, dropdown, button, error/result areas).
- `style.css` – Styling: layout, colors, responsive design, hover/focus states.
- `script.js` – Handles input validation, conversion logic, and UI updates.

## Features
- ✅ Input validation (numeric check, absolute‑zero limits per unit).
- ✅ Real‑time conversion to all three temperature scales.
- ✅ Clear error messaging with visual cues.
- ✅ Responsive layout – works on desktop and mobile screens.
- ✅ Keyboard‑friendly: pressing **Enter** triggers conversion (via button click).
- ✅ No external libraries or frameworks – pure vanilla tech stack.

## How to Use
1. Open `index.html` in any modern web browser.
2. Enter a numeric temperature value in the input field.
3. Select the unit of the entered value (°C, °F, or K) from the dropdown.
4. Click **Convert** (or press **Enter**) to see the results.
5. Invalid input shows an error message below the form.

## Conversion Formulas
- Celsius → Fahrenheit: `F = C × 9/5 + 32`
- Celsius → Kelvin: `K = C + 273.15`
- Fahrenheit → Celsius: `C = (F − 32) × 5/9`
- Fahrenheit → Kelvin: `K = (F − 32) × 5/9 + 273.15`
- Kelvin → Celsius: `C = K − 273.15`
- Kelvin → Fahrenheit: `F = (K − 273.15) × 9/5 + 32`

## Customisation
- **Colors**: Edit the CSS variables (`--primary-color`, `--accent-color`, `--background-color`, `--text-color`, `--error-color`) at the top of `style.css`.
- **Fonts**: Change the `font-family` rule in `body` to use a different system font or import a Google Font.
- **Step size**: Adjust input padding or font size in `.input-group input, .input-group select, .input-group button`.

## Accessibility Considerations
- Labels are associated with their respective inputs via `for`/`id`.
- Sufficient color contrast for text and background.
- Focus outlines visible for keyboard navigation.
- Error messages appear in a dedicated live‑region‑style element (`#errorMsg`).

## Future Enhancements (optional)
- Add a swap button to quickly switch between input and output units.
- Store recent conversions in `localStorage` for quick recall.
- Provide a history panel of past conversions.
- Allow copying results to clipboard with a single click.

## Credits
- Background colour palette inspired by warm, earthy tones.
- Built as a learning exercise for front‑end development fundamentals.

---

*Created for the “Temperature Converter” task – demonstrating a functional, responsive web app using only HTML, CSS, and JavaScript.*