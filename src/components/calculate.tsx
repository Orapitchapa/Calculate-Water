import { useState } from "react";

const Calculate = () => {
    const [weight, setWeight] = useState<number>(0);
    const [waterAmount, setWaterAmount] = useState<number>(0);

    const calculateWaterAmount = () => {
        const newWaterAmount = weight * 2.2 * (30/2);
        setWaterAmount(newWaterAmount);
    };

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = +event.target.value;
            setWeight(newValue >= 0 ? newValue : 0);
    };


    return (
        <div>
            <h1>Calculation of drinking water💦</h1>
            <label>
                Weight (kg):
                <input
                    type="number"
                    value={weight !== 0 ? weight : ""}
                    onChange={handleWeightChange}
                />
            </label>
            <button onClick={calculateWaterAmount}>Calculate</button>
            <p>Drinking water amount: {waterAmount.toFixed(0)} milliliter</p>
        </div>
    );
};


export default Calculate