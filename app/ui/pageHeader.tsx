interface pageHeaderProps {
  header: string;
  tagline: string;
  className: string;
}

export default function PageHeader({
  header,
  tagline,
  className,
}: pageHeaderProps) {
  return (
    <div className={`my-8 px-2 ${className}`}>
      <h1 className="text-2xl capitalize">{header}</h1>
      <h2 className="text-[20px] text-[--avt-text-secondary]">{tagline}</h2>
    </div>
  );
}
