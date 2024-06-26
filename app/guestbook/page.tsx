"use client";

import WraperTransition from "@/components/WraperTransition";
import { supabase } from "@/utils/supabase";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GuestbookPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [checkAuth, setCheckAuth] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [message, setMessage] = useState("");

  const checkAuthentication = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setUser(
        (user?.identities && user?.identities[0].identity_data?.user_name) ||
          null
      );
      setCheckAuth(true);
    }
  };

  const handelAddMessage = async () => {
    const res = await supabase
      .from("guestbook")
      .insert([{ username: user, message }]);

    if (res.status === 200 || res.status === 201) {
      setMessage("");
      const { data } = await supabase.from("guestbook").select();
      data && setPosts(data.reverse());
    }
  };

  const handelSingIN = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    checkAuthentication();
  };
  useEffect(() => {
    checkAuthentication();
    setCheckAuth(!!localStorage.getItem("supabase.auth.token"));

    async function fetchData() {
      try {
        const { data } = await supabase.from("guestbook").select();
        data && setPosts(data.reverse());
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  useGSAP(() => {
    gsap.from(".comment", { opacity: 0, duration: 3, stagger: 0.5 });
  }, []);

  return (
    <WraperTransition>
      <div className="mt-28 flex flex-col gap-4">
        <div className="mb-4">
          <p className=" mb-4 text-xl">sign my guestbook</p>
          {checkAuth ? (
            <form action="" className="relative max-w-[480px]">
              <input
                type="text"
                className=" w-full rounded-md px-4 py-2"
                placeholder="Your message..."
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              <button
                onClick={handelAddMessage}
                type="button"
                className="absolute right-1 top-1 flex h-8 w-16 items-center justify-center rounded bg-neutral-200 px-2 py-1 font-medium text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100"
              >
                Sign
              </button>
            </form>
          ) : (
            <button
              className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-neutral-200 bg-neutral-50  px-4 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800"
              onClick={handelSingIN}
            >
              <Image
                alt="github"
                src={"/images/icons/github.svg"}
                width={20}
                height={20}
              />
              <div>Sign in with GitHub</div>
            </button>
          )}
        </div>
        {posts?.map((post?) => (
          <div key={post?.id} className="comment">
            <span className="text-justify text-sm opacity-60">
              {post?.username}:{"  "}
            </span>
            <span>{post?.message}</span>
          </div>
        ))}
      </div>
    </WraperTransition>
  );
};

export default GuestbookPage;
