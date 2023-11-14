/// <reference types="vite-plugin-svgr/client" />
import { useDynamicSvgImport } from "./useDynamicSvgImport";
interface IProps {
  iconName: string;
  size: number;
  className?: string;
}

function SvgIcon(props: IProps) {
  const { iconName, size, className } = props;
  const { error, loading, SvgIcon } = useDynamicSvgImport(iconName);
  console.log(SvgIcon);
  return (
    <>
      {loading && (
        <div className="h-8 w-8 animate-pulse rounded-full bg-slate-400">
          {iconName}
        </div>
      )}
      {error && <>{iconName}</>}
      {SvgIcon && <SvgIcon className={className} width={size} height={size} />}
    </>
  );
}

export default SvgIcon;
