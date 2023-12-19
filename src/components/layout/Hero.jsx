import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="flex flex-row items-center mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold ">
          Everything
          <br /> is better
          <br /> with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className=" bg-primary flex justify-center items-center gap-2 text-white px-4 py-2 rounded-full ">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative w-full flex justify-center">
        <Image src="/pizza.png" alt="Pizza" height={250} width={250} />
      </div>
    </section>
  );
}