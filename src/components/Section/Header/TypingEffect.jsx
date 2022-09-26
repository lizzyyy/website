import React, { useState, useEffect } from "react";
const words = ["Lizzy Wang"];

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, Math.max(subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <h1>{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</h1>
  );
};

export default TypingEffect;
