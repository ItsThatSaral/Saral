import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    function manageScroll() {
      const topPos = window.pageYOffset;

      if (topPos > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    }

    window.addEventListener("scroll", manageScroll);

    return () => {
      window.removeEventListener("scroll", manageScroll);
    };
  });

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      id="scrollup"
      className={`${showScroll ? "show" : "hide"}`}
      onClick={handleScrollToTop}
    >
      <button id="scroll-top" className="scroll-to-top">
        <i className="fa-regular fa-arrow-up-long"></i>
      </button>
    </div>
  );
};

export default ScrollUp;
