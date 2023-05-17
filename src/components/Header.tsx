import React, { useEffect } from "react";

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="">
          <p>Hello World</p>
      </div>
    </>
  );
}

export { Header };