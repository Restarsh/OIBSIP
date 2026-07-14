document.addEventListener('DOMContentLoaded', () => {
    const tempInput = document.getElementById('tempInput');
    const unitSelect = document.getElementById('unitSelect');
    const convertBtn = document.getElementById('convertBtn');
    const errorMsg = document.getElementById('errorMsg');
    const resultBox = document.getElementById('resultBox');
    const resultC = document.getElementById('resultC');
    const resultF = document.getElementById('resultF');
    const resultK = document.getElementById('resultK');

    // Helper to show/hide error
    const showError = (message) => {
        errorMsg.textContent = message;
        errorMsg.classList.remove('hidden');
        resultBox.classList.add('hidden');
    };

    const hideError = () => {
        errorMsg.textContent = '';
        errorMsg.classList.add('hidden');
    };

    // Show results
    const showResults = (c, f, k) => {
        resultC.textContent = c.toFixed(2) + ' °C';
        resultF.textContent = f.toFixed(2) + ' °F';
        resultK.textContent = k.toFixed(2) + ' K';
        resultBox.classList.remove('hidden');
    };

    // Clear results
    const clearResults = () => {
        resultC.textContent = '';
        resultF.textContent = '';
        resultK.textContent = '';
        resultBox.classList.add('hidden');
    };

    // Validation
    const validateInput = (value, unit) => {
        // Allow empty? treat as error
        if (value === '' || value === null) {
            return 'Please enter a temperature value.';
        }
        // Allow optional leading minus and decimal
        if (!/^-?\d+(\.\d+)?$/.test(value)) {
            return 'Please enter a valid number.';
        }
        const num = parseFloat(value);
        // Absolute zero checks
        if (unit === 'C' && num < -273.15) {
            return 'Temperature cannot be below absolute zero (−273.15°C).';
        }
        if (unit === 'F' && num < -459.67) {
            return 'Temperature cannot be below absolute zero (−459.67°F).';
        }
        if (unit === 'K' && num < 0) {
            return 'Temperature cannot be below absolute zero (0K).';
        }
        return null; // no error
    };

    // Conversion functions
    const celsiusToFahrenheit = c => c * 9/5 + 32;
    const celsiusToKelvin = c => c + 273.15;
    const fahrenheitToCelsius = f => (f - 32) * 5/9;
    const fahrenheitToKelvin = f => (f - 32) * 5/9 + 273.15;
    const kelvinToCelsius = k => k - 273.15;
    const kelvinToFahrenheit = k => (k - 273.15) * 9/5 + 32;

    convertBtn.addEventListener('click', () => {
        const value = tempInput.value.trim();
        const unit = unitSelect.value;

        // Validate
        const error = validateInput(value, unit);
        if (error) {
            showError(error);
            return;
        }
        hideError();
        clearResults();

        const num = parseFloat(value);
        let c, f, k;

        // Convert to all three based on input unit
        if (unit === 'C') {
            c = num;
            f = celsiusToFahrenheit(c);
            k = celsiusToKelvin(c);
        } else if (unit === 'F') {
            f = num;
            c = fahrenheitToCelsius(f);
            k = fahrenheitToKelvin(f);
        } else if (unit === 'K') {
            k = num;
            c = kelvinToCelsius(k);
            f = kelvinToFahrenheit(k);
        }

        showResults(c, f, k);
    });

    // Optional: live validation on input change
    tempInput.addEventListener('input', () => {
        if (tempInput.value.trim() !== '') {
            hideError();
            clearResults();
        }
    });
});