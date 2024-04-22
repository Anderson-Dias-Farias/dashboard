import React from "react";
interface Props {
  children: React.ReactNode;
}

function BodyDash({ children }: Props) {
  return (
    <div className="w-full max-w-[1600px] h-full flex relative">{children}</div>
  );
}

export default BodyDash;
