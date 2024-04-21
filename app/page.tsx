import About from "@/components/About";
import Hobbies from "@/components/Hobbies";
import Line from "@/components/Line";
import ListBlog from "@/components/ListBlog";
import Photos from "@/components/Photos";
import SideProjects from "@/components/SideProjects";
import Telegram from "@/components/Telegram";

export default function HomePage() {
  return (
    <main >
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
    </main>
  );
}
