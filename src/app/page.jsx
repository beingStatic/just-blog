import Image from 'next/image';
import HeroImg from '../../public/imgs/home-hero-image.jpg';
import Button from './components/Button/Button';

export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-2">
        <div className="grid content-center">
          <h1 className="text-4xl font-bold mb-4">
            Unlocking the Power of Positive Habits: Transform Your Life One
            Routine at a Time
          </h1>
          <h3 className="text-xl">
            Discover the science-backed strategies to cultivate lasting positive
            habits and achieve your goals effortlessly.
          </h3>
          <div className="my-4">
            <Button text="Get Started" />
          </div>
        </div>
        <div>
          <Image src={HeroImg} alt="hero Img" />
        </div>
      </section>
    </main>
  );
}
