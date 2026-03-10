
import { RiNotification4Fill } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { Link, Outlet } from "react-router";

function TopNav() {
  return (
    <>
      <div className="bg-white capitalize py-2 shadow px-5 wrapper">
        <ul className="flex items-center gap-4 justify-between">
          <li>
            <ul className="flex ">
              <Link
                to="/"
                className="w-37.5 inline-flex gap-2 text-2xl text-[rgb(var(--primary))] font-bold items-center"
              >
                <img src="/images/logo.png" alt="" className="w-12.5" />
                {"Brivv"}
              </Link>
              <li className="lg:w-100 text-sm font-bold bg-[rgba(var(--primary)/0.2)] text-[rgb(var(--primary))] p-3 rounded-xl focus:outline-0 inline-flex  items-center ">
                <RiSearchLine />
                <input
                  type="text"
                  placeholder="Search Location, Zip code, Title..."
                  className=" pl-3 grow focus:outline-0 "
                />
              </li>
            </ul>
          </li>
          <li>
            <ul className="lg:flex hidden justify-around items-center  text-sm gap-3 font-semibold">
              <li className="">{/* <FaHouse size={30} /> */}buy</li>

              <Link to="/splasgscreen">
                {/* <RiMessage3Fill size={30} />{" "} */}rent
              </Link>
              <Link to="/messages">messages</Link>
              <Link to="/loginandregistration">Edicationals</Link>
              <Link to="profile">Profile</Link>
              <li>
                <a className="inline-flex items-center bg-[rgb(var(--primary))] text-white py-2 px-5 rounded-lg font-bold ">
                  add{" "}
                  <span className="inline-flex items-center justify-center rounded-full ml-1 bg-white text text-black w-5 h-5">
                    <IoIosAdd />
                  </span>
                </a>
              </li>
              <li className="text ">
                <RiNotification4Fill size={20} />
              </li>
              <li>
                <a
                  href=""
                  className="inline-block w-12.5 h-12.5 rounded-full border-2 border-[rgb(var(--primary))]"
                ></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default TopNav;
