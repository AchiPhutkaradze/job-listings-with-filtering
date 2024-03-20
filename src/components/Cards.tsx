import { useEffect, useState } from "react";
import data from "../../data.json";
interface Type {
  data?: object;
  setArrayLength: React.Dispatch<React.SetStateAction<boolean>>;
  arrayLength: boolean;
  buttons: Array<{}>;
  setButtons: any;
  buttonArr: [];
}

interface DataTypes {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}
interface LanguageButton {
  property: string;
  value: string;
}

export default function Cards({
  data: _,
  setArrayLength,
  buttons,
  setButtons,
  arrayLength,
  buttonArr,
}: Type) {
  const [card, setCard] = useState<DataTypes[]>(data);
  console.log(arrayLength);

  useEffect(() => {
    if (buttons.length > 0) {
      setArrayLength(true);
    }
  });

  // second condition when arrayLength is true
  useEffect(() => {
    if (arrayLength !== true) {
      return;
    }

    const filteredData = data.filter((item) => {
      return buttonArr.every((value: string) => {
        return (
          value === item.role ||
          value === item.level ||
          item.languages.includes(value)
        );
      });
    });
    if (arrayLength) {
      setCard(filteredData);
    }
  }, [buttonArr, data, arrayLength]);

  //
  const choseLanguageHandler = (obj: LanguageButton) => {
    setButtons((state: any) => {
      if (
        !state.some(
          (button: LanguageButton) =>
            button.property === obj.property && button.value === obj.value
        )
      ) {
        return [...state, obj];
      }
      return state;
    });
  };

  return (
    <div className="flex flex-col gap-10 pt-20 bg-color items-center">
      {card.map((item) => (
        <div
          className="p-4 shadow-boxShadow bg-cardColor max-w-3xl w-full"
          key={item.id}
        >
          <div className="relative bottom-10 left-7 ">
            <img className="w-12" src={item.logo} alt="company logo" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-8">
              <p className="w-29">{item.company}</p>
              <div className="flex gap-2">
                {item.new === true && (
                  <button className="rounded-xl w-12 text-white bg-teal-800	">
                    New
                  </button>
                )}
                {item.featured === true && (
                  <button className="rounded-xl w-20	 text-white bg-teal-950	">
                    FEATURED
                  </button>
                )}
              </div>
            </div>
            <div>{item.position}</div>
            <div className="flex gap-2.5 items-center">
              <p>{item.postedAt}</p>
              <div className="w-1 h-1 rounded-full bg-slate-800"></div>
              <p>{item.contract}</p>
              <div className="w-1 h-1 rounded-full bg-slate-800"></div>
              <p>{item.location}</p>
            </div>
          </div>
          <hr className="w-full h-1 mt-3 mb-3" />
          <div className="flex gap-x-10	 flex-wrap">
            <button
              onClick={() => {
                choseLanguageHandler({
                  property: "role",
                  value: item.role,
                });
              }}
            >
              {item.role}
            </button>
            <button
              onClick={() =>
                choseLanguageHandler({
                  property: "level",
                  value: item.level,
                })
              }
            >
              {item.level}
            </button>
            {item.languages.map((eachLanguage: string, index: number) => (
              <button
                onClick={() =>
                  choseLanguageHandler({
                    property: "language",
                    value: eachLanguage,
                  })
                }
                key={index}
              >
                {eachLanguage}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
