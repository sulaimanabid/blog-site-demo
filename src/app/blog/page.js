"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../components/Loader";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Blog() {
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogsFromFireStore = async () => {
      const blogsCollection = collection(db, "blogs");
      const blogSnapshot = await getDocs(blogsCollection);
      const blogList = blogSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBlogPosts(blogList);
      setLoading(false);
    };

    fetchBlogsFromFireStore();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-12">Fitness Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => router.push(`/blog/${post.id}`)}
            className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={400}
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="mb-4 line-clamp-3">{post.description}</p>
              <Link href={`/blog/${post.id}`}>
                <span className="text-blue-600 hover:underline">Read More</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
