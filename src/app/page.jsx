import Image from 'next/image';
import HeroImg from '../../public/imgs/home-hero-image.jpg';

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2 h-[100vh]">
        <div>
          <h1 className="text-5xl font-bold">Just Blogs</h1>
        </div>
        <div>
          <Image src={HeroImg} alt="hero Img" />
        </div>
      </section>
    </main>
  );
}
