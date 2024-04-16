interface route {
  title: string;
  href: string;
}

const routes: route[] = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "Projects", href: "/projects" },
  { title: "Uses", href: "/uses" },
  { title: "Guestbook", href: "/guestbook" },
];

export default routes;
