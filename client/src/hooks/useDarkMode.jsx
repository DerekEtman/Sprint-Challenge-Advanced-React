import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = ( initialValues ) => {

    const [dark, setDark] = useLocalStorage('dark', initialValues);
    
    useEffect (() => {

        const body = document.querySelector('body');
        
        dark ? body.classList.add('darkMode-mode') : body.classList.remove('darkMode-mode');

    },[dark]);

    return [dark, setDark];
}