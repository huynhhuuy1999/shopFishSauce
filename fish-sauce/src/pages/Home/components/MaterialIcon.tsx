interface MaterialIconProps {
  name: string;
  fill?: boolean;
  className?: string;
}

export default function MaterialIcon({
  name,
  fill = false,
  className = "",
}: MaterialIconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={
        fill ? { fontVariationSettings: "'FILL' 1" } : undefined
      }
    >
      {name}
    </span>
  );
}
