import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number; // Largeur du motif
  height?: number; // Hauteur du motif
  x?: number; // Position x du motif
  y?: number; // Position y du motif
  cx?: number; // Coordonnée x du centre du cercle
  cy?: number; // Coordonnée y du centre du cercle
  cr?: number; // Rayon du cercle
  className?: string; // Classes CSS optionnelles
  [key: string]: string | number | undefined; // Autres props autorisées
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
