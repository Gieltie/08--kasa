import React from "react";

export default function Collapse(props) {
  const [open, setOpen] = React.useState(false);
  const contentRef = React.useRef();
  function handleToggle() {
    setOpen(!open);
  };

  return (
    <article className="collapse">
      <button 
        key={props.id}
        className="collapse__button" 
        onClick={handleToggle}
      >
        <span>{props.label}</span>
        <i className={`fa-solid fa-chevron-up ${open ? "rotate" : "rotate-back"}`}></i>
      </button>
      <div 
        className="collapse__content"
        ref={contentRef}
        style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
        <div className="collapse__content--child">
            {props.children}
        </div>
      </div>
    </article>
  );
}