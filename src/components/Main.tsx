import { useState } from "react";

interface DeepNumbers {
    a: number;
    b: number;
}

function Main() {

    const randomInt = (a: number, b: number): number => {
        return Math.floor(Math.random() * (b - a + 1)) + a;
    }

    const generateDeepNumbers = (): DeepNumbers => {
        const a = randomInt(-10000, 8);
        const b = 9 - a;
        return {
            a: a,
            b: b
        };
    }

    const [deepNumbers, setDeepNumbers] = useState<DeepNumbers>(generateDeepNumbers());

    return (
        <main>
            <p className="deep-text">
                6 + 3 = 9
                <br />
                but so does {deepNumbers.a} + {deepNumbers.b}
            </p>
            <p className="deep-text">
                The way you do things is not always the only way to do them.
            </p>
            <p className="deep-text">
                Respect other people's way of thinking.
            </p>
            <button onClick={() => setDeepNumbers(generateDeepNumbers())}>Get other numbers</button>
        </main>
    )
}

export default Main;