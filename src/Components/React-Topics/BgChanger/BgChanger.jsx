import { useEffect, useState } from "react";

const BgChanger = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#254598");
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
      const myNuber = Math.floor(Math.random() * 100000 + 100000);
      setBgColor(`#${myNuber}`.toString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <div
        style={{
          width: "100px",
          height: "80px",
          border: "1px solid black",
          background: bgColor,
        }}
      ></div>
    </>
  );
};

export default BgChanger;
