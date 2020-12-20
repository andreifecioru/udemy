import React, { useEffect, useState } from "react";

const Link = ({ href, className, children }) => {
  const [isActive, setIsActive] = useState(window.location.pathname === href);

  const onAnchorClick = (event) => {
    // handle command-clicks
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();

    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  useEffect(() => {
    const onLocationChange = () => {
      setIsActive(window.location.pathname === href);
    }
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, [href]);

  return (
    <a href={href} className={`${className} ${isActive ? "active": ""}`} onClick={onAnchorClick}>
      {children}
    </a>
  );
};

export default Link;
