import Image from "next/image";
import Right from "../../components/icons/Right";
export default function Hero() {
  return (
    <section className="hero mt-4">
      <div className="py-12">
        <h1 className="text-6xl font-semibold">
          Everything<br />
          is better <br />
          with&nbsp;
          <span className="text-red-500">
            Food
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Food is more than just nutrition; it is the missing component in the mosaic of our lives.
          Beyond fueling our bodies, food connects us to memories, cultures, and one another.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="bg-red-500 uppercase flex items-center gap-2 text-white px-4 py-2
          rounded-full">
            Order Now
            <Right></Right>
          </button>
          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="relative">
        <Image src={'/pizza.png'} layout={'fill'}
         objectFit={'contain'} alt={'pizza'}></Image>
      </div>
    </section>
  );
}