import { useState, useEffect } from "react";
import Loader from "./Loader";


const Button = ({ text, size, color, width, disabled, solid, pill, outline, icon, background }) => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);


    //handle loader
    const loaderhandler = () => {
        setLoading(true);
        setShow(true);
        window.location.reload();
      };
      useEffect(() => {
        if (loading) {
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }
      }, [loading]);
    
      if (loading) return <Loader />;
  return (
    <>
      <button
        className={`btn btn-${size}`}
        style={{
          backgroundColor: (solid || pill) && `${background}`,
          boxShadow: "none",
          padding: 10,
          width: `${width}`,
          fontSize: 12,
          fontWeight: 500,
          border: outline && `1px solid ${color}`,
          borderRadius: pill && 13,
          color: `${color}`
        }}
        onClick={loaderhandler}
        disabled={disabled}
      >
        <span><i className={`fa ${icon} mx-1`}></i></span>
        {text}
      </button>
    </>
  );
};

export default Button;
