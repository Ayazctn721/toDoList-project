import { BsEmojiSunglasses, BsEmojiSunglassesFill } from "react-icons/bs";
import { useState, useEffect } from "react";

function ThemeSwitcher() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.style.background = "linear-gradient(to bottom,rgb(54, 54, 54) 40%,rgb(61, 61, 61) 40%)";
            document.body.style.color = "darkgreen";
        } else {
            document.body.style.background = "linear-gradient(to bottom, #D4D4D4 40%, #EDEDED 40%)";
            document.body.style.color = "black";
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)} className="btn position-absolute top-0 end-0 fs-3">
            <span className="fs-6 me-1">Change Theme</span>
            {darkMode ? <BsEmojiSunglasses /> : <BsEmojiSunglassesFill />}
        </button>
    )
}

export default ThemeSwitcher
