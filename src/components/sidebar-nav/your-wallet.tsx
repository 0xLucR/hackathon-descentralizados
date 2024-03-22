import { Icons } from "../icons";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "../ui/separator";

export function YourWallet({
  handleDisconnectWallet,
}: {
  handleDisconnectWallet: () => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full gap-2">
          <Icons.wallet className="h-6 w-6 min-h-6 min-w-6" />
          <span className="truncate text-ellipsis">
            0x295e26495CEF6F69dFA69911d9D8e4F3bBadB89B
          </span>
          <Icons.chevronRight className="h-6 w-6 min-h-6 min-w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-background gap-6 max-w-lg w-full py-8 px-0">
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <Icons.close className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogHeader className="px-8">
          <DialogTitle>Your Wallet</DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-between px-8">
          <span className="text-sm truncate text-ellipsis">
            0x295e26495CEF6F69dFA69911d9D8e4F3bBadB89B
          </span>
          <span className="text-sm">10000.7 ETH</span>
        </div>

        <Separator />

        <div className="px-8 w-full">
          <Button className="w-full" onClick={handleDisconnectWallet}>
            Disconnect Wallet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}