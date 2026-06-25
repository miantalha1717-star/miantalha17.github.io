import {
  EnvelopeSimple,
  Phone,
  LinkedinLogo,
  XLogo,
  InstagramLogo,
  MapPin,
} from "@phosphor-icons/react";
import type { ContactLink } from "../data/portfolio";

const map = {
  email: EnvelopeSimple,
  phone: Phone,
  linkedin: LinkedinLogo,
  x: XLogo,
  instagram: InstagramLogo,
  location: MapPin,
} as const;

export function ContactIcon({
  name,
  weight = "regular",
  className,
}: {
  name: ContactLink["icon"];
  weight?: "regular" | "bold" | "fill" | "duotone" | "light" | "thin";
  className?: string;
}) {
  const Cmp = map[name];
  return <Cmp weight={weight} className={className} aria-hidden />;
}