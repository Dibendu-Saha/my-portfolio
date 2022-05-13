import { useEffect } from "react";

export function useReveal(elementToObserve, elementToReveal) {
    let options = { root: null, threshold: 0.7 };

    const obs = new IntersectionObserver(intersectionParams => {
        if (elementToReveal) {
            intersectionParams.forEach(param => {
                if (param.isIntersecting) {
                    if (!elementToReveal.classList.contains("active")) {
                        elementToReveal.classList.add("active");
                    }
                }
            });
        }
    }, options);

    useEffect(() => {
        if (elementToObserve)
            obs.observe(elementToObserve);
    }, [elementToObserve]);
}