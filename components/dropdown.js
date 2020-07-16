import React, { useRef, useState, useEffect } from "react";

export default function App() {
  return (
    <div>
      <Dropdown label="Dropdown">
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            <a href="#">hi</a>
          </li>
          <li>
            <a href="#">world</a>
          </li>
        </ul>
      </Dropdown>
      <h1>hi</h1>
    </div>
  );
}

function Dropdown({ label, children }) {
  const [opened, setOpened] = useState(false);

  const dropdownMenuRef = useRef(null);
  const dropdownTriggerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownTriggerRef.current &&
        dropdownTriggerRef.current.contains(event.target)
      ) {
      } else if (
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target)
      ) {
        console.log("Bottom Ref");
        setOpened(false);
      } else if (
        dropdownMenuRef.current &&
        dropdownMenuRef.current.contains(event.target) &&
        (event.target.onClick || event.target.href)
      ) {
        setOpened(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownMenuRef]);

  return (
    <div>
      <a
        ref={dropdownTriggerRef}
        href="javascript:;"
        onClick={() => setOpened(!opened)}
      >
        {label}
      </a>
      {opened && (
        <div
          ref={dropdownMenuRef}
          style={{
            padding: 12,
            backgroundColor: "#fff",
            border: "1px solid #000",
            position: "absolute",
            zIndex: 1000,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
