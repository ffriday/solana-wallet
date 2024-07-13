type Props = {
  title: string;
  text: string;
  className: string;
};

export const InfoBox = ({ title, text, className }: Props) => {
  return (
    <div className={className}>
      <p className="font-bold">{title}</p>
      <p className="w-full break-all">{text}</p>
    </div>
  );
};
