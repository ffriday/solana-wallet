import { Link } from "react-router-dom";

type Props = {
  links: {
    name: string;
    action: string | (() => void);
  }[];
  children?: React.ReactNode;
};

export const Header = ({ links, children }: Props) => {
  return (
    <header className="text-sm sm:text-base w-screen flex justify-between h-8 items-center p-4 border-b-2 border-gray-400">
      <h1 className="">Solana Wallet</h1>
      <nav className="flex justify-center gap-2">
        {links.map((link) =>
          typeof link.action === "string" ? (
            <Link to={link.action} key={link.name}>
              {link.name}
            </Link>
          ) : (
            <button onClick={link.action} key={link.name}>
              {link.name}
            </button>
          )
        )}
      </nav>
      {children}
    </header>
  );
};
