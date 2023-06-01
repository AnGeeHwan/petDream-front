"use client"; // Use Client Components

import GlobalStyle from "@/styles/globals";

import MagazinePage from "./magazine/page";

function HomePage() {
  return (
    <>
      <GlobalStyle />
      <MagazinePage />
    </>
  );
}
export default HomePage;
