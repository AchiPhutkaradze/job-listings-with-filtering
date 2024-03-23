export default function FilterBar(props: {
  buttons: Array<{ value: string }>;
  buttonArr: [] | string[];
  setButtonArr: React.Dispatch<any>;
}) {
  const removeButton = (button: number) => {
    props.setButtonArr((prevItems: []) =>
      prevItems.filter((_, index) => index !== button)
    );
  };
  return (
    <div className="pl-5 pr-5 w-full  -mt-10 z-20 relative ">
      <div className="w-full flex p-5 rounded-md bg-cardColor	shadow-boxShadow m-auto max-w-3xl gap-5 flex-wrap">
        {props.buttonArr.map((element: string, index: any) => (
          <button
            key={index}
            className="font-bold bg-buttonBgColor text-base h-8  rounded text-slate-500 flex gap-2 items-center"
          >
            <div className="pl-2">{element}</div>{" "}
            <button
              onClick={() => removeButton(index)}
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
