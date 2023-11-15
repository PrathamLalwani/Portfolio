/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useState } from "react";
import { useDynamicSvgImport } from "./useDynamicSvgImport";
interface IProps {
  iconName: string;
  size: number;
  className?: string;
}

const SvgIcon = (props: IProps) => {
  const { iconName, size, className } = props;

  const { error, loading, SvgIcon } = useDynamicSvgImport(iconName);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (SvgIcon) {
      setIsMounted(true);
    } else {
      setIsMounted(false);
    }
  }, [SvgIcon, iconName]);

  return (
    <>
      {loading && (
        <div className="h-8 w-8 animate-pulse rounded-full bg-slate-400">
          {iconName}
        </div>
      )}
      {error && (
        <div className="h-8 w-8 animate-pulse rounded-full bg-slate-400">
          {iconName}
        </div>
      )}
      {SvgIcon && isMounted ? (
        <SvgIcon className={className} width={size} height={size} />
      ) : (
        iconName
      )}
    </>
  );
};

export default SvgIcon;
