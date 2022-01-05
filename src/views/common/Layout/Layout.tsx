import React from "react";
import { Header } from "../Header";

interface LayoutProps {
  title: string;
  keywords: string;
  description: string;
}

export const Layout: React.FC<LayoutProps> = (
  title?:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined,
  keywords?: string | undefined,
  description?: string | undefined,
  children?: LayoutProps
) => {
  return (
    <div>
      <head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </head>
      <Header />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Welcome to Ersinshop",
  keywords: "best products, cheap, quality",
  description: "The best info and news in shopping",
};
