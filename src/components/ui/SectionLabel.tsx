interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <span className="text-[#D35400] text-xs font-bold tracking-widest uppercase font-clash">
      {text}
    </span>
  );
}
