const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <header className="mb-8">
    <h1 className="text-3xl font-extrabold text-slate-900">{title}</h1>
    <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
  </header>
);

export default SectionHeader;
