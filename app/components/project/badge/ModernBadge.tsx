import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";

export default function ModernBadge() {
  return (
    <AnimatedGradientText>
      ✨
      <span
        className={cn(
          `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
        )}
      >
        Moderne
      </span>
    </AnimatedGradientText>
  );
}
