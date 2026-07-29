import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span
          className={cn(
            "eyebrow",
            light ? "text-emerald-400" : "text-sky-600"
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              light ? "bg-emerald-400" : "bg-sky-500"
            )}
          />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.15] tracking-tight",
            light ? "text-white" : "text-navy-900"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-4 text-base md:text-lg leading-relaxed",
              light ? "text-white/70" : "text-navy-500"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
