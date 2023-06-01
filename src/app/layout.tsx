import Recoil from "@/components/Recoil";
import ReactQuery from "@/components/ReactQuery";

export const metadata = {
  title: "PetDream",
  description: "PetDream",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: "0px" }}>
        <Recoil>
          <ReactQuery>{children}</ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
