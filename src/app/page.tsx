import SideBar from "./components/SideMenu";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className=" d-flex align-item-center justify-content-center justify-sm-content-end justify-content-md-end">
      <SideBar />
      <Main />
    </div>
  );
}