import { useEffect, useState } from "react";
import bgHeader from "/public/assets/bg-header-mobile.svg";
import bgHeaderDesk from "/public/assets/bg-header-desktop.svg";

export default function Header() {
  //media query
  const [desktopResolution, setDesktopResolution] = useState<boolean>(
    window.matchMedia("(min-width: 1280px)").matches
  );
  console.log(desktopResolution);
  const mediaQuery = window.matchMedia("(min-width: 1280px)");
  useEffect(() => {
    const resolutionChange = (event: MediaQueryListEvent | MediaQueryList) => {
      setDesktopResolution(event.matches);
    };
    mediaQuery.addListener(resolutionChange);
    resolutionChange(mediaQuery);
  }, []);

  return (
    <div>
      <div className=" bg-headerBgColor">
        <img
          className="h-auto z-10 relative w-full max-h-40"
          src={!desktopResolution ? bgHeader : bgHeaderDesk}
          alt="bg-image"
        ></img>
      </div>
    </div>
  );
}
