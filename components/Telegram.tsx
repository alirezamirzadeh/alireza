import Image from "next/image";
import Link from "next/link";
import React from "react";

const Telegram = () => {
  return (
    <Link href={"https://t.me/alirezamirzadeh"}  className="mt-12  flex justify-center ">
      {" "}
      <button className="flex w-full justify-center gap-2 rounded-lg
       bg-primary px-4 py-2 text-center text-bgdark">
        <Image
          alt=":)"
          width={20}
          height={20}
          src="/images/icons/telegram.svg"
        />{" "}
        Joining my Telegram channel{" "}
        <Image
          alt=":)"
          width={20}
          height={20}
          src="/images/icons/telegram.svg"
        />
      </button>
    </Link>
  );
};

export default Telegram;
