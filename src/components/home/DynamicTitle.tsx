"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
const DynamicTitle = ({ titles }: { titles: string[] }) => {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: titles,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [titles]);

  return (
    <h1 className="hero-title">
      <span>we are </span>
      <span ref={element} className="auto-type"></span>
    </h1>
  );
};

export default DynamicTitle;
