import { getPosts } from "../page";
import { notFound } from "next/navigation";
import { Post } from "@/components/Post";

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
}

export default async function get({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return notFound();
  

  return (
    <div className="mt-24">
      <Post>{post.body}</Post>
    </div>
  );
}
