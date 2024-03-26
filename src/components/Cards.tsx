import { useEffect, useState } from "react";
import data from "../.././public/data.json";
interface Type {
  data?: object;
  setArrayLength: React.Dispatch<React.SetStateAction<boolean>>;
  arrayLength: boolean;
  setButtons: any;
  buttons: {
    value: string;
  }[];
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
  setButtons,
  arrayLength,
  buttons,
}: Type) {
  const [card, setCard] = useState<DataTypes[]>(data);
  console.log(arrayLength);

  useEffect(() => {
    if (buttons.length > 0) {
      setArrayLength(true);
    } else {
      setArrayLength(false);
    }
  });

  // second condition when arrayLength is true
  useEffect(() => {
    if (!arrayLength) {
      return;
    }

    const filteredData = data.filter((item) => {
      return buttons.every((button) => {
        return (
          button.value.includes(item.role) ||
          button.value.includes(item.level) ||
          item.languages.includes(button.value)
        );
      });
    });
    setCard(filteredData);
  }, [data, arrayLength, buttons]);

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
    <div className="flex flex-col gap-10 pt-20 pl-5 pr-5 bg-color items-center h-lvh">
      {card.map((item) => (
        <div
          className="pt-8 pr-6 pl-6 pb-8 relative shadow-boxShadow bg-cardColor max-w-3xl w-full"
          key={item.id}
        >
          <div className="absolute -top-7 left-20">
            <img className="w-12" src={item.logo} alt="company logo" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-8">
              <p className="w-29 text-textColor font-bold text-sm	">
                {item.company}
              </p>
              <div className="flex gap-2">
                {item.new === true && (
                  <button className="rounded-xl w-12 text-white bg-headerBgColor text-sm font-bold">
                    New
                  </button>
                )}
                {item.featured === true && (
                  <button className="rounded-xl w-20 font-bold text-xs text-white bg-teal-950	">
                    FEATURED
                  </button>
                )}
              </div>
            </div>
            <div className="text-nameColor font-bold">{item.position}</div>
            <div className="flex gap-2.5 items-center">
              <p className="text-lightColor">{item.postedAt}</p>
              <div className="w-1 h-1 rounded-full bg-lightColor"></div>
              <p className="text-lightColor">{item.contract}</p>
              <div className="w-1 h-1 rounded-full bg-lightColor"></div>
              <p className="text-lightColor">{item.location}</p>
            </div>
          </div>
          <hr className="w-full h-height mt-3 mb-3 bg-lineColor" />
          <div className="flex gap-x-5	gap-y-5 flex-wrap">
            <button
              className="font-bold bg-buttonBgColor text-base h-8 w-20 rounded text-textColor"
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
              className="font-bold bg-buttonBgColor tex-base h-8 w-20 rounded text-textColor "
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
                className="font-bold text-textColor bg-buttonBgColor h-8 w-20 rounded "
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
