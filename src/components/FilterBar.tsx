export default function FilterBar(props: {
  buttons:
    | {
        value: string;
        property: string;
      }
    | any;
  setButtons: React.Dispatch<
    React.SetStateAction<
      {
        value: string;
      }[]
    >
  >;
}) {
  function removeButton(index: number) {
    const newButtons = [...props.buttons];
    newButtons.splice(index, 1);
    props.setButtons(newButtons);
  }

  return (
    <div className="pl-5 pr-5 w-full  -mt-10 z-20 relative  ">
      <div className="w-full flex p-5 rounded-md bg-cardColor	shadow-boxShadow m-auto max-w-3xl gap-5 flex-wrap xl:max-w-maxWidth">
        {props.buttons.map((element: string | any, index: number) => (
          <button
            key={index}
            className="font-bold bg-buttonBgColor text-base h-8  rounded text-slate-500 flex gap-2 items-center"
          >
            <div className="pl-2">{element.value}</div>{" "}
            <button
              onClick={() => {
                removeButton(index);
              }}
              className="bg-headerBgColor w-8 h-8 text-white"
            >
              X
            </button>
          </button>
        ))}
      </div>
    </div>
  );
}
