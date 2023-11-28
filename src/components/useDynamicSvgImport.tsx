/// <reference types="vite-plugin-svgr/client" />
import React, { useEffect, useRef, useState } from "react";

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined,
  ) => void;
  onError?: (err: unknown) => void;
}
export function useDynamicSvgImport(
  iconName: string,
  options: UseDynamicSVGImportOptions,
) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`../assets/techicons/${iconName}.svg`)
        ).default;
        if (onCompleted) {
          // onCompleted(iconName, ImportedIconRef.current);
        }
      } catch (err) {
        if (onError) {
          onError(err);
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [iconName, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}
