interface Props {
  quote: string;
}

export default function QuoteBlock({ quote }: Props) {
  return (
    <div className="my-20 border-l border-[#d4c1a7]/30 pl-8 max-w-3xl">
      <p className="italic text-3xl leading-relaxed text-[#e7d8c9]">
        “{quote}”
      </p>
    </div>
  );
}