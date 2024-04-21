import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export type Post = {
  title: string;
  slug: string;
  date: string;
  description: string;
  body: string;
};

export async function getPosts() {
  const posts = await fs.readdir("./posts/");

  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./posts/${file}`;
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);

        return { ...data, body: content } as Post;
      })
  );
}

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}