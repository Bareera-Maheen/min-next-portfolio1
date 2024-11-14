import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Navbar = () => {
  
 
  return (
    <main>
    
    <HoverCard>
<HoverCardTrigger> menu</HoverCardTrigger>
<HoverCardContent>
 we will provide you best food
</HoverCardContent>
</HoverCard>
<Button>download </Button>
    </main>
  );
};

export default Navbar;