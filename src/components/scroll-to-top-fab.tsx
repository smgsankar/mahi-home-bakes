import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { ChevronUp } from "./icons/chevron-up";

export default function ScrollToTopFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/80 text-white animate-fade-in"
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
          >
            <ChevronUp className="!h-5 !w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="left"
          className="bg-primary text-white border-primary"
        >
          <p>Scroll to top</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
