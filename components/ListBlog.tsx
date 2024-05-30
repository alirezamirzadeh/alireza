import { getPosts } from "@/lib/post";
import React from "react";
import Article from "./Article";

const ListBlog = async ({ title = "Blog" }) => {
  const posts = await getPosts();

  return (
    <div className="mb-10">
      <h3 className="mb-6 text-xl font-medium ">{title}</h3>
      <div className="flex flex-col gap-4 font-mono">
        {posts?.map((post) => (
          <Article
            key={post.title}
            date={post.date}
            title={post.title}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default ListBlog;
