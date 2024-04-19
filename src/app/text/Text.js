import React from "react";

const Text = () => {
  const styleText = {
    position: 'absolute',
    marginTop: '15%',
    left: '60%',
    // transform: 'translate'('-50%', '-25%')
  };
  const text = {
    fontSize: "60px",
    fontWeight: "300px",
    letterSpacing: "3px",
    color: 'rgb(74 4 78)'
  };
  return (
    <div style={styleText}>
      <h1 style={text}>Hi, I'm Brenda</h1>
      <p class="text-center text-fuchsia-950 font-medium text-xl" >
        Web Developer 
      </p>
    </div>
  );
};

export default Text;
