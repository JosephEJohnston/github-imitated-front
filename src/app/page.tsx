import Header from "@/components/header";
import LeftSidebar from "@/components/left-sidebar";
import ContentHome from "@/components/content-home";
import ContentFeed from "@/components/content-feed";
import Footer from "@/components/footer";
import RightSidebar from "@/components/right-sidebar";


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
