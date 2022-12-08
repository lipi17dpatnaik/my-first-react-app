import { useState } from 'react';

export const useToggle = (initialVal) => {

    const [state, setState] = useState(initialVal || false);
    const toggle = () => setState(!state);
    return [state, toggle];
}