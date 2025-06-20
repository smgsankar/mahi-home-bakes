import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface WhatsAppFABProps {
  phoneNumber: string; // E.g., +1234567890 (include country code)
  message?: string;
}

export default function WhatsAppFAB({ phoneNumber, message }: WhatsAppFABProps) {
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, '')}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl bg-green-500 hover:bg-green-600 text-white animate-fade-in"
            style={{ animationDelay: '1s' }} // Delayed animation
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
              <MessageSquare className="h-7 w-7" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-green-500 text-white border-green-500">
          <p>Chat on WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
