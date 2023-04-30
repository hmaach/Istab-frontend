import { useEffect } from "react";

export const Optionsmenu = ({ btnClass, menuClass }) => {
  useEffect(() => {
    const btn = document.querySelector(`.${btnClass}`);
    const menu = document.querySelector(`.${menuClass}`);

    const handleClick = (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.style.display = "none";
      }
    };

    btn.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [btnClass, menuClass]);

  return null;
};
