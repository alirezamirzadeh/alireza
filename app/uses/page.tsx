import ProductUses from "@/components/ProductUses";
import React from "react";

interface Product {
  title: string;
  body: string;
  urlImage: string;
}

const products: Product[] = [
  { title: "Lenovo Lgion 5 5800h", body: "Laptop Computer", urlImage: "/images/lenovo_lgion_5.jpg" },
  { title: "Logitech K470", body: "Normal Keyboard", urlImage: "/images/keyboard_logi.jpg" },
  { title: "Rk61", body: "Mechanical keboard", urlImage: "/images/keyboard_rk61.jpg" },
  { title: "Dipon", body: "Laptop Stand", urlImage: "/images/laptop_stand.jpg" },
  { title: "QCY T13 TWS", body: "Bluetooth Headphone", urlImage: "/images/headphones_qcy.jpg" },
  { title: "Samsung 720p 933SNPLUS", body: "Monitor", urlImage: "/images/monitor_samsung.jpg" },
  { title: "Chair", body: "Work Chair", urlImage: "/images/chair.jpg" },

];

const UsesPage = () => {
  return (
    <div className="mt-28">
      <div className="opacity-75">
        I`&apos;`ve been spending hours and hours at my desk every day. So, I`&apos;`ve been
        continuously improving my workspace in order to boost my productivity.
      </div>
      <div className="mt-8 grid grid-cols-2 gap-6 max-sm:grid-cols-1 ">
        {products.map(({ title, body, urlImage }) => (
          <ProductUses
            title={title}
            body={body}
            urlImage={urlImage}
            key={urlImage}
          />
        ))}
      </div>
    </div>
  );
};

export default UsesPage;
