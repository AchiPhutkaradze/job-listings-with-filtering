import Header from "./components/Header";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";

function App() {
  const [arrayLength, setArrayLength] = useState<boolean>(false);
  const [buttons, setButtons] = useState<Array<{ value: string }>>([]);
  const [buttonArr, setButtonArr] = useState<any>([]);
  console.log(buttons);
  useEffect(() => {
    for (let i = 0; i < buttons.length; i++) {
      let objectValue = buttons[i].value;
      setButtonArr([...buttonArr, objectValue]);
    }
  }, [buttons]);

  console.log(buttonArr);
  return (
    <>
      <Header />
      {arrayLength === true && (
        <FilterBar buttons={buttons} buttonArr={buttonArr} />
      )}
      <Cards
        buttonArr={buttonArr}
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
        buttons={buttons}
        setButtons={setButtons}
      />
    </>
  );
}

export default App;
