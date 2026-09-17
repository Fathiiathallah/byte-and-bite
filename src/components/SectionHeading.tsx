export default function SectionHeading({
  eyebrow,
  title,
  desc,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-bite-red">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-zinc-900"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-zinc-400" : "text-zinc-500"
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}