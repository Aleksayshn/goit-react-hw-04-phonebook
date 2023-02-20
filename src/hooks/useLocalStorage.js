import { useState, useEffect, useRef } from 'react';

export const useLocalStorage = (key, initialState) => {
    const [state, setState] = useState(
        () => JSON.parse(localStorage.getItem(key)) ?? initialState
    );
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
};