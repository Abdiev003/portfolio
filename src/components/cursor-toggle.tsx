"use client";

import * as React from "react";
import { MousePointer2, MousePointerClick } from "lucide-react";
import { useCursorToggle } from "@/hooks/use-cursor-toggle";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CursorToggle() {
  const { isEnabled, toggle } = useCursorToggle();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="relative h-9 w-9"
          >
            {isEnabled ? (
              <MousePointerClick className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <MousePointer2 className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle custom cursor</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isEnabled ? "Disable" : "Enable"} custom cursor</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
