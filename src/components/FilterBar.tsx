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
    <div className="w-full flex p-5 rounded-md bg-cardColor	shadow-boxShadow z-20 relative m">
      {props.buttonArr.map((element: string, index: any) => (
        <button
          key={index}
          onClick={() => removeButton(index)}
          className="font-bold bg-buttonBgColor text-base h-8 w-20 rounded text-slate-500"
        >
          {element} <button>X</button>
        </button>
      ))}
    </div>
  );
}
