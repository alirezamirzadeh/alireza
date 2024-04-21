import { notFound } from "next/navigation";
import { Post } from "@/components/Post";
import { getPost, getPosts } from "@/lib/post";

export async function generateStaticParams() {
  const posts = await getPosts();

 
  return posts.map((post) => ({
    slug: post.slug,
  }))
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
