import { PortfolioSectionsLayout } from "@/src/features/portfolio";
import { portfolioData } from "@/src/features/portfolio";

export default function Home() {
  return (
    <PortfolioSectionsLayout
      data={portfolioData}
      heroProfileImageSrc="/images/profile.jpg"
      heroProfileImageAlt="Portrait of Chandisa Randeni"
    />
  );
}


