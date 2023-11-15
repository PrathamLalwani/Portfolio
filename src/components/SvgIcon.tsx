/// <reference types="vite-plugin-svgr/client" />
import { useEffect, useState } from "react";
import { useDynamicSvgImport } from "./useDynamicSvgImport";
interface IProps {
  iconName: string;
  size: number;
  className?: string;
}

function SvgIcon(props: IProps) {
  const { iconName, size, className } = props;
  const [svgIcon, setSvgIcon] =
    useState<React.FC<React.SVGProps<SVGElement>>>();
  const { error, loading, SvgIcon } = useDynamicSvgImport(iconName);
  useEffect(() => {
    setSvgIcon(SvgIcon);
  }, [SvgIcon]);
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
      {SvgIcon && svgIcon ? (
        <SvgIcon className={className} width={size} height={size} />
      ) : (
        iconName
      )}
    </>
  );
}

export default SvgIcon;
