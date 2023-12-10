import SvgIcon from "./SvgIcon";
type Props = {
  iconName: string;
};

const Technology = (props: Props) => {
  return (
    <div
      title={props.iconName}
      className="h-30 m-2 flex w-max shrink-0 flex-grow-0 basis-0 flex-col items-center justify-center rounded-lg bg-background-200 p-4 hover:shadow-lg hover:shadow-primary "
    >
      <SvgIcon
        iconName={props.iconName}
        size={60}
        onCompleted={() => console.log}
        onError={() => console.error}
        className="mb-2 text-text"
      />
      <span className="line-clamp-1 hidden h-min w-max text-lg text-text sm:block">
        {" "}
        {props.iconName}
      </span>
    </div>
  );
};

export default Technology;
