import React from "react";
import { Button } from "@/components/ui/button";

const PinkButton = ({children}:{children:React.ReactNode}) => {
  return (
    <Button className="bg-[#FB2E86] jon rounded-[2px] px-8 py-5">
      {children}
    </Button>
  );
};

export default PinkButton;
