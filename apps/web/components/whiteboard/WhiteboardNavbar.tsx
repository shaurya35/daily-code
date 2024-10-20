import React from "react";

const WhiteboardNavbar = () => {
  return (
    <div className="absolute flex flex-row items-center justify-center p-6">
      <div className="p-3 border border-border rounded-lg">icon</div>
      <div className="flex flex-row items-center justify-center">
        <div>image</div>
        <div>|</div>
        <div>Whiteboard</div>
      </div>
    </div>
  );
};

export default WhiteboardNavbar;
