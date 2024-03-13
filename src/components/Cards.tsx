import { useEffect, useState } from "react";
import data from "../../data.json";
interface Type {
  data?: any;
}

export default function Cards({ data: _ }: Type) {
  const [skill, setSkill] = useState<string>("");
  console.log(skill);

  const tools = data.map((item) => {
    return item.role;
  });

  let arr: any = tools.flat();
  useEffect(() => {
    setSkill(arr);
  }, []);
  return (
    <div className="flex flex-col gap-5 mt-4">
      {data.map((item: any) => (
        <div className="p-4 shadow-xl border-black" key={item.id}>
          <div className="relative bottom-5 left-7 ">
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
        </div>
      ))}
    </div>
  );
}
