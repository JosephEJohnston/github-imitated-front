import Header from "@/components/home/header";
import LeftSidebar from "@/components/home/left-sidebar";
import ContentHome from "@/components/home/content-home";
import ContentFeed from "@/components/home/content-feed";
import Footer from "@/components/home/footer";
import RightSidebar from "@/components/home/right-sidebar";


export default function Home() {
  return (
      <>
        <Header />
        <div className="content-display">
          <LeftSidebar />
          <div id="content">
            <main>
              <ContentHome />
              <ContentFeed />
            </main>
            <Footer />
          </div>
          <RightSidebar />
        </div>
      </>
  );
}
