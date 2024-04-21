import { MDXComponents } from "mdx/types";

export const useMDXComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-5 text-xl font-medium">{children}</h1>
  ),
  ul: ({ children }) => (
    <ul className="list-disc text-lg font-medium">{children}</ul>
  ),
  p: ({ children }) => (
    <p className=" mb-8 text-justify  text-[15px] opacity-90">{children}</p>
  ),
};
