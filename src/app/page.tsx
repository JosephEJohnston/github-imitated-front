import LeftSidebar from "@/components/home/left-sidebar";
import ContentHome from "@/components/home/content/content-home";
import ContentFeed from "@/components/home/content/content-feed";
import Footer from "@/components/home/footer";
import RightSidebar from "@/components/home/right-sidebar";
import MediaControlPage from "@/components/home/media-control-page";
import ContentUserRepository from "@/components/home/content/content-user-repository";


export default function Home() {
  return (
      <>
          <MediaControlPage
              leftSideBar={
                  <LeftSidebar />
              }
              middleContent={
                  <div id="content">
                      <main>
                          <ContentHome />
                          <ContentUserRepository />
                          <ContentFeed />
                      </main>
                      <Footer />
                  </div>
              }
              rightSideBar={
                  <RightSidebar />
              }
          />
      </>
  );
}
