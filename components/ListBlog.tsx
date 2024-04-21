import { getPosts } from "@/app/blog/page";
import Link from "next/link";
import React from "react";




const ListBlog = async ({title = "Blog"}) => {
  const posts = await getPosts();

  return (
    <div className="mb-10">
      <h3 className="mb-6 text-xl font-medium ">{title}</h3>
      <div className="flex flex-col gap-4 font-mono">
        {posts?.map((post) => (
          <Link href={"/blog/"+ post.slug}
            key={post.title}
            className="border-b border-dashed border-gray-300 pb-2 opacity-60 hover:opacity-90 dark:border-gray-600"
          >
            <h3>{post.title}</h3>
            <h4 className="text-[15px] opacity-60">{post.date}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListBlog;
