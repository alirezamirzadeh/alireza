import { notFound } from "next/navigation";
import { Post } from "@/components/Post";

import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";


export async function getPosts() {
  const posts = await fs.readdir("./content");  
  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./content/${file}`;
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);
        return { ...data,slug:file.split(".")[0], body: content };
      })
  );
}

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return notFound();
  

  return (
    <div className="mt-24">
      <Post>{post.body}</Post>
    </div>
  );
}
