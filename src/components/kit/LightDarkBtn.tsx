import { useEffect, useState } from "react";

const Switch: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.target.checked);
  };

  return (
    <div className="switch-wrapper">
      <div className="toggle-container">
        <div className="toggle-wrap">
          <input
            className="toggle-input"
            id="holo-toggle"
            type="checkbox"
            checked={darkMode}
            onChange={handleToggle} 
          />
          <label className="toggle-track" htmlFor="holo-toggle">
            <div className="track-lines">
              <div className="track-line" />
            </div>
            <div className="toggle-thumb">
              <div className="thumb-core" />
              <div className="thumb-inner" />
              <div className="thumb-scan" />
              <div className="thumb-particles">
                <div className="thumb-particle" />
                <div className="thumb-particle" />
                <div className="thumb-particle" />
                <div className="thumb-particle" />
                <div className="thumb-particle" />
              </div>
            </div>
            <div className="toggle-data">
              <div className="data-text off"></div>
              <div className="data-text on"></div>
              <div className="status-indicator off" />
              <div className="status-indicator on" />
            </div>
            <div className="energy-rings">
              <div className="energy-ring" />
              <div className="energy-ring" />
              <div className="energy-ring" />
            </div>
            <div className="interface-lines">
              <div className="interface-line" />
              <div className="interface-line" />
              <div className="interface-line" />
              <div className="interface-line" />
              <div className="interface-line" />
              <div className="interface-line" />
            </div>
            <div className="toggle-reflection" />
            <div className="holo-glow" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Switch;
