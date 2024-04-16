import React from "react";

const listPosts = [
  { title: "Why You Should Use a React Framework", date: "Jul 15,2023" },
  { title: "Adding canonical tag in Next.js", date: "Dec 24, 2021" },
  { title: "2022 Recap", date: "Aug 5, 2024" },
];

const ListBlog = ({title = "Blog"}) => {
  return (
    <div className="mb-10">
      <h3 className="mb-6 text-xl font-medium ">{title}</h3>
      <div className="flex flex-col gap-4  font-mono">
        {listPosts.map((post) => (
          <div
            key={post.title}
            className="border-b border-dashed border-gray-300 pb-2 opacity-60 dark:border-gray-600"
          >
            <h3>{post.title}</h3>
            <h4 className="text-[15px] opacity-60 ">{post.date}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBlog;
