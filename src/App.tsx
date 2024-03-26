import Header from "./components/Header";
import Cards from "./components/Cards";
import { useState } from "react";
import FilterBar from "./components/FilterBar";

function App() {
  const [arrayLength, setArrayLength] = useState<boolean>(false);
  const [buttons, setButtons] = useState<Array<{ value: string }>>([]);
  return (
    <>
      <Header />
      {arrayLength === true && (
        <FilterBar buttons={buttons} setButtons={setButtons} />
      )}
      <Cards
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
        setButtons={setButtons}
        buttons={buttons}
      />
    </>
  );
}

export default App;
