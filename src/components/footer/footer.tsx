import linkedin from "./linkedin.png";
import xing from "./xing.png";
import facebook from "./facebook.png";

export const Footer = () => (
  <footer className="container max-w-screen-xl mx-auto flex justify-between items-center border-t-[1px] border-black py-[25px] text-xl align-self-end justify-self-end">
    <div>
      Am Kaiserkai 43
      <br />
      20457 Hamburg
    </div>
    <div className="flex items-center">
      <div className="flex flex-col">
        <a href="tel:+491725836832">+49 172 5836832</a>
        <a href="mailto:info@maegnets.de">info@maegnets.de</a>
      </div>
      <div className="flex items-center ml-[56px]">
        <a href="#">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="#" className="pl-[18px]">
          <img src={xing} alt="Xing" />
        </a>
        <a href="#" className="pl-[9px]">
          <img src={facebook} alt="Facebook" />
        </a>
      </div>
    </div>
  </footer>
);
