import * as React from "react";
import { Header } from "./Header";
import "../lib/styles.css";
import { Tuc, TucGrid } from "./Tuc";

const props = {
  amrs: [
    { name: "Husky", img: "/images/amr_husky.webp" },
    { name: "Shuttle", img: "/images/amr_shuttle.webp" },
    { name: "Spot", img: "/images/amr_spot.webp" },
    { name: "Capra", img: "/images/amr_capra.webp" },
    { name: "Dingo", img: "/images/amr_dingo.webp" },
    { name: "Crayler", img: "/images/amr_crayler.webp" },
    { name: "G4T4", img: "/images/amr_g4t4.webp" },
    { name: "Rapyuta", img: "/images/amr_rapyuta.webp" },
    { name: "T-Bot", img: "/images/amr_tbot.webp" },
  ],
  fallbackImg: "/images/background_models.png",
  fallbackImgAlt: "Models",
  pages: ["Home", "Solution", "Models", "Unser Team", "Blog"],
  color: "#141D1E",
};

export const HeaderStory = () => <Header {...props} />;

export const TucStory = () => <Tuc />;
export const TucStory2 = () => <TucGrid />;
