import type { ReactNode } from "react";
import { Section } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { H1 } from "./Heading";
import { Subtitle } from "./Subtitle";
import { HeroBackdrop } from "./HeroBackdrop";

export function Hero({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  media,
  children,
}: {
  eyebrow?: string;
  eyebrowIcon?: string;
  title: ReactNode;
  description: string;
  /** Visual shown to the right of the text (below it on mobile). */
  media?: ReactNode;
  children?: ReactNode;
}) {
  const text = (
    <div className="space-y-3">
      {eyebrow && <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>}
      <H1 display>{title}</H1>
      <Subtitle>{description}</Subtitle>
      {children}
    </div>
  );

  return (
    <Section variant="light" className="relative -mt-21 overflow-hidden">
      <HeroBackdrop />
      {media ? (
        <div className="relative grid items-center gap-10 pt-20 md:grid-cols-[1.15fr_1fr] md:gap-6">
          {text}
          {media}
        </div>
      ) : (
        <div className="relative pt-20">{text}</div>
      )}
    </Section>
  );
}
