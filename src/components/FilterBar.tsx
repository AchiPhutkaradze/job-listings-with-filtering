export default function FilterBar(props: {
  buttons: Array<{ value: string }>;
  buttonArr: [];
}) {
  return (
    <div className="w-full flex pl-5 rounded-md bg-cardColor	shadow-boxShadow z-20 relative m">
      {props.buttonArr.map((element: string, index: any) => (
        <button className="p-3" key={index}>
          {element}
        </button>
      ))}
    </div>
  );
}
