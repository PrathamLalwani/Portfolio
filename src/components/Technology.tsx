import SvgIcon from "./SvgIcon";
type Props = {
  iconName: string;
  showNames: boolean;
};

const Technology = (props: Props) => {
  return (
    <div
      title={props.iconName}
      className="m-2 flex h-max w-max shrink-0 flex-grow-0 basis-0 items-center justify-center rounded-full bg-background-200 p-4"
    >
      {!props.showNames && (
        <SvgIcon iconName={props.iconName} size={60} className=" text-text" />
      )}
    </div>
  );
};

export default Technology;
