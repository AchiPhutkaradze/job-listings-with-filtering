export default function FilterBar(props: { language: string }) {
  let valuesArr: any = [];
  for (let i = 0; i < props.language.length; i++) {
    let objectValue = props.language[i].value;
    valuesArr.push(objectValue);
  }
  console.log(valuesArr);
  return (
    <div className="w-full flex pl-5 rounded-md bg-cardColor	shadow-boxShadow z-20 relative m">
      {valuesArr.map((element: string, index: any) => (
        <button className="p-3" key={index}>
          {element}
        </button>
      ))}
    </div>
  );
}
