/// <reference types="vite-plugin-svgr/client" />
import React, { useEffect, useRef, useState } from "react";

export function useDynamicSvgImport(iconName: string) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    setLoading(true);
    const importSvgIcon = async (): Promise<void> => {
      try {
        importedIconRef.current = (
          await import(`../assets/techicons/${iconName}.svg`)
        ).default;
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
        if (importedIconRef.current === undefined) {
          console.error(`Icon ${iconName} not found`);
        } else {
          console.log(`Icon ${iconName} loaded`);
          console.log(importedIconRef.current);
        }
      }
    };

    importSvgIcon();
  }, [iconName]);

  return { error, loading, SvgIcon: importedIconRef.current };
}
