import ListBlog from '@/components/ListBlog'
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
  const posts = await fs.readdir("./content");  
  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `./content/${file}`;
        const fileContent = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(fileContent);
        return { ...data,slug:file.split(".")[0], body: content } as Post;
      })
  );
}


const BlogPage =async () => {
  
  return (
    <div className='mt-28'>
      
      <ListBlog title="read my blog"  />
    </div>
  )
}

export default BlogPage