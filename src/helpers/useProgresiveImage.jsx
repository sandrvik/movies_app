import { useEffect, useState, useRef } from "react";

const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
    const isMountedRef = useRef(null)
    const [src, setSrc] = useState(lowQualitySrc);

    useEffect(() => {
        isMountedRef.current = true
        setSrc(lowQualitySrc);
        const img = new Image();
        img.src = highQualitySrc;
        img.onload = () => {
            if (isMountedRef.current) setSrc(highQualitySrc);
        };
        return () => isMountedRef.current = false
    }, [lowQualitySrc, highQualitySrc]);
    return [src, { blur: src === lowQualitySrc }];
};

export default useProgressiveImg;