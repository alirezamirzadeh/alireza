import { notFound } from "next/navigation";
import { Post } from "@/components/Post";
import { getPost } from "@/lib/post";




export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return notFound();
  

  return (
    <div className="mt-24">
      <Post>{post.body}</Post>
    </div>
  );
}
