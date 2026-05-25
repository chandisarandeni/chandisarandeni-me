import { PortfolioSectionsLayout } from "@/components/sections";
import portfolioData from "@/content/portfolio";

export default function Home() {
  return (
    <PortfolioSectionsLayout
      data={portfolioData}
      heroProfileImageSrc="/images/profile.jpg"
      heroProfileImageAlt="Portrait of Chandisa Randeni"
      className="space-y-0"
    />
  );
}
