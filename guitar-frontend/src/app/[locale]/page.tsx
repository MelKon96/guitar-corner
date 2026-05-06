import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Prices from "@/components/sections/Prices";
import Videos from "@/components/sections/Videos";
import Reviews from "@/components/sections/Reviews";
import { getTeacher, getPrices, getVideos, getReviews, getPhotos, getPromo } from "@/lib/api";
import Contacts from "@/components/sections/Contacts";
import Navbar from "@/components/lauout/Navbar";
import Footer from "@/components/lauout/Footer";
import Gallery from "@/components/sections/Gallery";

export default async function Home() {
  const [teacher, prices, videos, reviews, photos, promo] = await Promise.all([getTeacher(), getPrices(), getVideos(), getReviews(), getPhotos(), getPromo()]);

  return (
    <main>
      <Navbar />
      <Hero teacher={teacher} />
      <About teacher={teacher} />
      <Prices prices={prices} promo={promo} />
      <Videos videos={videos} />
      <Reviews reviews={reviews} />
      <Gallery photos={photos} />
      <Contacts />
      <Footer />
    </main>
  );
}
