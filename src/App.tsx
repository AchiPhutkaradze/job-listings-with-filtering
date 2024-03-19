import Header from "./components/Header";
import Cards from "./components/Cards";
import { useState } from "react";
import FilterBar from "./components/FilterBar";

function App() {
  const [arrayLength, setArrayLength] = useState<boolean>(false);
  const [language, setLanguage] = useState<Array<{}> | string[]>([]);

  return (
    <>
      <Header />
      {arrayLength === true && <FilterBar />}
      <Cards
        arrayLength={arrayLength}
        setArrayLength={setArrayLength}
        language={language}
        setLanguage={setLanguage}
      />
    </>
  );
}

export default App;
