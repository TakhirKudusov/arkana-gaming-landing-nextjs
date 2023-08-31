import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/components/common/registry";
import GlobalStyles from "@/lib/components/common/globalStyles";
import StyledHeader from "@/components/layout/styledHeader";
import StyledFooter from "@/components/layout/styledFooter";
import ReduxProvider from "@/redux/reduxProvider";
import MobileMenu from "@/components/layout/mobileMenu";

export const metadata: Metadata = {
  title: "Arkana Gaming | Online slots provider",
  description: "We are a online slots software provider with focus on mobiles",
  keywords: [
    "slots",
    "provider",
    "instant",
    "win",
    "scratch",
    "cards",
    "premium",
    "gaming",
    "online",
  ],
  openGraph: {
    title: "Arkana Gaming | Online slots provider",
    description:
      "We are a online slots software provider with focus on mobiles",
    url: "https://arkana-gaming.com/",
    siteName: "Arkana Gaming",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://arkana-gaming.com/images/preview.png",
        width: 980,
        height: 515,
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body id="outer-container">
        <ReduxProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <MobileMenu />
            <div id="page-wrap">
              <StyledHeader />
              {children}
              <StyledFooter />
            </div>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
