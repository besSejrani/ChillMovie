import React, { useState, useEffect, useRef } from "react";

function usePwa() {
  const [installable, setInstallable] = useState(false);
  let defferedPrompt: any = useRef(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      defferedPrompt.current = event;
      setInstallable(true);
    });

    window.addEventListener("appinstalled", () => {
      console.log("INSTALL: Success");
    });
  }, [installable]);

  const handleInstallClick = () => {
    if (defferedPrompt) {
      defferedPrompt.current.prompt();

      defferedPrompt.current.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "dismissed") {
          console.log("user cancelled installation");
        } else {
          console.log("user added to homescreen");
          defferedPrompt.current = null;
          setInstallable(false);
        }
      });
    }
  };
  return <div></div>;
}

export default usePwa;
