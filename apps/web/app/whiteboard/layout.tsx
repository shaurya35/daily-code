import type { Metadata } from "next";
import WhiteboardNavbar from "../../components/whiteboard/WhiteboardNavbar";

export const metadata: Metadata = {
  title: "Dailycode",
  description: "Code daily",
};

export default function ProfileLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <WhiteboardNavbar/>
      <div className=" flex p-4 m-auto">
        <div className="p-2 w-full grid grid-cols-8 gap-2">
          {children}
        </div>
      </div>
    </div>
  );
}
