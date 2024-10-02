"use client";

import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/Loader";
import Image from "next/image";

const BlogDetail = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPost = async () => {
      const postDoc = doc(db, "blogs", id);
      const postSnapshot = await getDoc(postDoc);
      if (postSnapshot.exists()) {
        setPost({ id: postSnapshot.id, ...postSnapshot.data() });
      } else {
        console.log("No Post Found!");
      }
      setLoading(false);
    };

    fetchBlogPost();
  }, [id]);

  if (loading) return <Loader />;
  if (!post) return <div>No post found</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-6 min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-2 text-center">{post.title}</h1>
      <div className="w-full max-w-2xl">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={400}
          loading="lazy"
          className="w-full h-85 object-contain mb-4"
        />
      </div>
      <p className="text-lg text-gray-700 mb-4 text-justify">
        {post.description}
      </p>
    </div>
  );
};

export default BlogDetail;


