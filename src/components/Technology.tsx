import SvgIcon from "./SvgIcon";
type Props = {
  iconName: string;
};

const Technology = (props: Props) => {
  return (
    <div
      title={props.iconName}
      className="m-2 flex h-max w-max shrink-0 flex-grow-0 basis-0 items-center justify-center rounded-full bg-background-200 bg-opacity-10 p-4 backdrop-blur-xl"
    >
      <SvgIcon
        iconName={props.iconName}
        size={60}
        className=" mr-3 text-text"
      />

      {props.iconName}
    </div>
  );
};

export default Technology;
