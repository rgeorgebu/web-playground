import { useCallback, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { HelloWorld } from './hello-world';

// function HelloWorld() {
//     return <div>yo</div>
// }

function App() {
    const [count, setCount] = useState(0);

    const handleUpCount = useCallback(() => {
        setCount(prev => prev + 1)
    }, [setCount]);

    return <>
        <HelloWorld />
        <div>Count: {count}</div>
        <button onClick={handleUpCount}>Up count</button>
    </>;
}

const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

const rootReact = createRoot(rootEl);
rootReact.render(<App />);

