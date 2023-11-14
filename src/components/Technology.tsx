import SvgIcon from "./SvgIcon";
type Props = {
  iconName: string;
};

const Technology = (props: Props) => {
  return (
    <div
      title={props.iconName}
      className="m-2 flex h-max w-max shrink-0 flex-grow-0 basis-0 items-center justify-center rounded-full bg-background-200 bg-opacity-30 p-4 backdrop-blur-sm"
    >
      <SvgIcon
        iconName={props.iconName}
        size={60}
        className="text-text  sm:mr-3 "
      />
      <span className="hidden text-lg text-text sm:inline-block">
        {props.iconName}
      </span>
    </div>
  );
};

export default Technology;
