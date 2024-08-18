import React from "react";

function ProgressBar({ target }) {
  const [readingProgress, setReadingProgress] = React.useState(0);

  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  const getColor = () => {
    if (readingProgress < 25) return "#5a48ff"; // initial color
    if (readingProgress < 50) return "#c7b178"; // change color at 25%
    if (readingProgress < 75) return "#9a73d8"; // change color at 50%
    return "#00ccff"; // change color at 75% and beyond
  };

  return (
    <div
      className={`reading-progress-bar fixed`}
      style={{
        width: `${readingProgress}%`,
        backgroundColor: getColor(),
      }}
    />
  );
}

export default ProgressBar;
