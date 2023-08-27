import Image from 'next/image';
import HeroImg from '../../public/imgs/home-hero-image.jpg';

export default function Home() {
  return (
    <main>
      <section>
        <div></div>
        <div>
          <Image src={HeroImg} alt="hero Img" />
        </div>
      </section>
    </main>
  );
}
