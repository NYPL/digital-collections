import React, { useLayoutEffect, useEffect, useState } from "react";
import { init, Viewer } from "universalviewer";

export function useEvent(
  viewer: Viewer | undefined,
  name: string,
  cb: (...args: any[]) => void
) {
  useLayoutEffect(() => {
    if (viewer) {
      return viewer.on(name, cb);
    }
  }, [viewer]);
}

export function useUniversalViewer(
  ref: React.RefObject<HTMLDivElement>,
  options: any
) {
  const [uv, setUv] = useState<Viewer>();

  useEffect(() => {
    if (ref.current) {
      const currentUv = init(ref.current, options);
      setUv(currentUv);

      return () => {
        currentUv.dispose();
      };
    }
  }, [ref]);

  return uv;
}
