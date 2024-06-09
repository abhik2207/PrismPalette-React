import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState('#FFFFFF');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <div id="color-picker-container">
            <h1>PrismPalette - Color Picker</h1>
            <div id="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <div id="color-input">
                <label htmlFor="colorIinput">Select a color: </label>
                <input type="color" id="colorIinput" name="colorIinput" value={color} onChange={handleColorChange} />
            </div>
        </div>
    )
}

export default ColorPicker;
