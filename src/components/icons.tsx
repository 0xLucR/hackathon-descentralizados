import { Wallet,X, LoaderCircle,Home,ArrowRightLeft,LogOut, WalletCards, History, BookUser, DatabaseBackup, ChevronRight} from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  spinner: LoaderCircle,
  home: Home,
  escrow: ArrowRightLeft,
  asset: WalletCards,
  history: History,
  addressBook: BookUser,
  backup: DatabaseBackup,
  logOut: LogOut,
  wallet: Wallet, 
  close: X,
  chevronRight: ChevronRight
};
