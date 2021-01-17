import React, { useRef, useState, useEffect } from "react";

function useOnScreen(options) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setVisible(entries[0].isIntersecting);
      if (entries[0].isIntersecting) {
      }
    }, options);

    observer.observe(ref.current as any);
  }, [ref]);

  return [ref, visible];
}

export default useOnScreen;
