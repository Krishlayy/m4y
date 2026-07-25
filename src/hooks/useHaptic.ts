"use client";

import { useCallback } from "react";

type HapticFeedbackType = "light" | "medium" | "heavy" | "success" | "error";

export function useHaptic() {
  const triggerHaptic = useCallback((type: HapticFeedbackType = "medium") => {
    if (typeof window === "undefined" || !navigator.vibrate) {
      return;
    }

    switch (type) {
      case "light":
        navigator.vibrate(50);
        break;
      case "medium":
        navigator.vibrate(100);
        break;
      case "heavy":
        navigator.vibrate(200);
        break;
      case "success":
        navigator.vibrate([50, 50, 100]); // Short, short, long
        break;
      case "error":
        navigator.vibrate([100, 50, 100, 50, 100]); // Buzz buzz buzz
        break;
      default:
        navigator.vibrate(100);
    }
  }, []);

  return triggerHaptic;
}
