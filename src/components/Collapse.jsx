import React from "react";

export default function Collapse(props) {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const contentRef = React.useRef();
/* if (contentRef.current) console.log(contentRef.current.scrollHeight); */

  return (
    <div className="collapse">
      <button className="collapse__toggle" onClick={handleToggle}>
        {props.label}
        <i className={`fa-solid fa-chevron-up ${open ? "rotate" : "rotate-back"}`}></i>
      </button>
      <div className="collapse__content"
          ref={contentRef}
          style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
        <div className="collapse__content--child">{props.description}</div>
      </div>
    </div>
  );
}

