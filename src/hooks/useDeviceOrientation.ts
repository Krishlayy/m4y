"use client";

import { useState, useEffect } from "react";

export function useDeviceOrientation() {
  const [orientation, setOrientation] = useState({ beta: 0, gamma: 0 }); // beta = front/back tilt (-180 to 180), gamma = left/right tilt (-90 to 90)
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.DeviceOrientationEvent) {
      setError(new Error("DeviceOrientationEvent is not supported by your browser."));
      return;
    }

    const handleOrientation = (event: DeviceOrientationEvent) => {
      setOrientation({
        beta: event.beta || 0,
        gamma: event.gamma || 0,
      });
    };

    // Need to handle iOS 13+ permission request if necessary, 
    // but typically it's only required for DeviceMotionEvent. For Orientation, it often works if served over HTTPS.
    // However, some modern iOS versions require explicit permission.
    
    window.addEventListener("deviceorientation", handleOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return { orientation, error };
}
