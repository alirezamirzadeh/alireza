"use clinet";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="flex cursor-pointer items-center justify-center
       rounded-lg  bg-slate-200 p-2 dark:bg-primary "
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <Image
        src={`/images/icons/${theme === "dark" ? "dark" : "light"}.svg`}
        alt="moon"
        height={20}
        width={20}
      />
    </div>
  );
};

export default Theme;
