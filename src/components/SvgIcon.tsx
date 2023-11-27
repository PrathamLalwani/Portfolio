/// <reference types="vite-plugin-svgr/client" />
import { useDynamicSvgImport } from "./useDynamicSvgImport";
import { useEffect, useState } from "react";
interface IProps {
  iconName: string;
  size: number;
  onCompleted: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined,
  ) => void;
  onError: (err: unknown) => void;
  className?: string;
}

const SvgIcon = (props: IProps) => {
  const { iconName, onCompleted, onError, size, className } = props;
  const [refreshed, setRefreshed] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setRefreshed(true);
    }, 1);
  }, []);

  const { error, loading, SvgIcon } = useDynamicSvgImport(iconName, {
    onCompleted,
    onError,
  });
  if (error) {
    return <p>error</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (SvgIcon) {
    return (
      refreshed && <SvgIcon width={size} height={size} className={className} />
    );
  }
  return null;
};

export default SvgIcon;
