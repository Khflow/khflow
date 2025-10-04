"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/helpers";
import useDiscoverFilters from "@/hooks/useDiscoverFilters";

export interface BrandLogoProps {
  animate?: boolean;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ animate = false, className }) => {
  const { content } = useDiscoverFilters();

  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className={cn("group inline-flex items-center", className)}
    >
      <Image
        src="/favicon.ico" // ✅ or "/logo.png" if you prefer the uploaded image
        alt="KFlix Logo"
        width={40}  // adjust size as needed
        height={40}
        className={cn(
          "transition-transform duration-300",
          animate && "group-hover:scale-110"
        )}
        priority
      />
    </Link>
  );
};

export default BrandLogo;
