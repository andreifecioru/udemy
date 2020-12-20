import { useEffect, useState } from "react";


const Route = ({path, children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => { // cleanup when component is removed from DOM
      window.removeEventListener("popstate", onLocationChange);
    }
  }, []); // we want to call this only once on 1st render

  return (currentPath === path)
    ? children
    : null;
};

export default Route;