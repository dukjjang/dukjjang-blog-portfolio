import Head from "next/head";
import { previewData } from "next/headers";
import Footer from "../components/Footer";
import Resume from "../components/Resume";

const Home = () => {
  if (!previewData) return <div>not Data</div>;

  return (
    <main className=" h-full w-full bg-background">
      <Resume />
      <Footer />
    </main>
  );
};

export default Home;
