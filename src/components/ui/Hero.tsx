import type { ReactNode } from "react";
import { Section } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { H1 } from "./Heading";
import { Subtitle } from "./Subtitle";

export function Hero({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  eyebrowIcon?: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <Section variant="light" className="-mt-21">
      <div className="space-y-3 pt-20">
        {eyebrow && <Eyebrow icon={eyebrowIcon}>{eyebrow}</Eyebrow>}
        <H1>{title}</H1>
        <Subtitle>{description}</Subtitle>
        {children}
      </div>
    </Section>
  );
}
