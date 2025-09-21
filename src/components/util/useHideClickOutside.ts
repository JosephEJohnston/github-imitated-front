import {RefObject, useEffect} from "react";

const useHideClickOutside = <T extends HTMLElement>(
    elementRef: RefObject<T | null>,
    hideControl: () => void,
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (elementRef.current && !elementRef.current.contains((event.target as Element))) {
                hideControl()
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [elementRef]);
}

export default useHideClickOutside;
