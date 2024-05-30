import ListBlog from "@/components/ListBlog";
import WraperTransition from "@/components/WraperTransition";

const BlogPage = async () => {
  return (
    <WraperTransition>
      <div className="mt-28">
        <ListBlog title="read my blog" />
      </div>
    </WraperTransition>
  );
};

export default BlogPage;
