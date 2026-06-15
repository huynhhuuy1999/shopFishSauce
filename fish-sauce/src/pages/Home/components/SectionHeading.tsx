interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="text-center mb-xl">
      <h2 className="font-headline text-headline-lg text-primary mb-sm">
        {title}
      </h2>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
    </div>
  );
}
