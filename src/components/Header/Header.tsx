import { Link } from "react-router-dom";

type Props = {
  links: {
    name: string;
    isDisabled?: boolean;
    action: string | (() => void);
  }[];
  children?: React.ReactNode;
};

export const Header = ({ links, children }: Props) => {
  return (
    <header className="text-sm sm:text-base w-screen flex justify-between h-10 items-center p-4 border-b-2 border-gray-400">
      <nav className="flex justify-center gap-4">
        {links.map((link) =>
          typeof link.action === "string" ? (
            <Link to={link.action} key={link.name}>
              {link.name}
            </Link>
          ) : (
            <button onClick={link.action} key={link.name} disabled={!!link.isDisabled}>
              {link.name}
            </button>
          )
        )}
      </nav>
      {children}
    </header>
  );
};
