import { supabase } from "@/utils/supabase";
import React from "react";

const GuestbookPage = async () => {
  const { data, error } = await supabase.from("guestbook").select();

  const items: [] = data && data?.reverse().slice(0, -1);
  return (
    <div className="mt-28 flex flex-col gap-4">
      <div className="mb-4">
        <p className=" text-xl mb-4">sign my guestbook</p>
        <form action="" className="relative max-w-[480px]">
          <input
            type="text"
            className=" rounded-md px-4 py-2 w-full"
            placeholder="Your message..."
            required
          />
          <button type="submit" className="absolute right-1 top-1 flex h-8 w-16 items-center justify-center rounded bg-neutral-200 px-2 py-1 font-medium text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100">
            Sign
          </button>
        </form>
      </div>
      {items?.map((data) => (
        <div key={data.id}>
          <span className="opacity-60">
            {data.username}:{"  "}
          </span>
          <span>{data.message}</span>
        </div>
      ))}
    </div>
  );
};

export default GuestbookPage;
