import React, { useLayoutEffect, useEffect, useState } from "react";
import type { Viewer } from "universalviewer";

export function useEvent(
  // from code came from https://codesandbox.io/p/sandbox/uv-nextjs-example-239ff5?file=%2Flib%2Fuse-universalviewer.ts%3A9%2C26
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
    if (typeof window === "undefined") {
      return undefined;
    }
    const { init } = require("universalviewer");
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
