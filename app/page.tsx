import About from "@/components/About";
import Hobbies from "@/components/Hobbies";
import Line from "@/components/Line";
import ListBlog from "@/components/ListBlog";
import Photos from "@/components/Photos";
import SideProjects from "@/components/SideProjects";
import Telegram from "@/components/Telegram";
import WraperTransition from "@/components/WraperTransition";

//export const runtime = "edge";

export default function HomePage() {
  return (
    <WraperTransition>
      <About />
      <Line />
      <SideProjects />
      <Line />
      <ListBlog />
      <Line />
      <Photos />
      <Line />
      <Hobbies />
      <Telegram />
    </WraperTransition>
  );
}
