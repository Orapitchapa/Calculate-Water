import { useEffect, useState } from "react";


const Darklightmode = () => {
    const [selectedOption, setSelectedOption] = useState('light');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    const isDarkMode = selectedOption === 'dark';

    useEffect(() => {
        document.title = isDarkMode ? 'Dark Mode' : 'Light Mode';

        const styleTag = document.getElementById('mode-styles');
        if (styleTag) {
            styleTag.innerHTML = isDarkMode
                ? `body { background-color: #000000; color: #ffffff; }`
                : `body { background-color: #ffffff; color: #000000; }`;
        }
    }, [isDarkMode]);

    return (
        <div>
            <label>
                <select value={selectedOption} onChange={handleOptionChange}>
                    <option value="light">Light Mode</option>
                    <option value="dark">Dark Mode</option>
                </select>
            </label>
        </div>
    );
};

export default Darklightmode