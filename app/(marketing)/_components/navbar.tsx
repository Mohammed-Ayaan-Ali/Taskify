import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const textFont = Poppins({
    subsets: ['latin'],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ],
});

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
            <Button className={cn(textFont.className)} size="sm" variant="outline">
               <Link href="/sign-in">
               Login 
               </Link> 
          </Button>
          <Button className={cn(textFont.className)} size="sm">
            <Link href="/sign-up">Get Taskify for free</Link>
            
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
