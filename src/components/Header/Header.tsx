import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className="w-[10%] bg-blue-500 h-full flex justify-center items-center text-white">
        Logo
      </div>
      <div className="w-[90%] flex justify-between items-center px-10">
        <div>
          <input
            type="text"
            className="border border-slate-300 py-2 px-4 rounded-full"
            placeholder="Search....."
          />
        </div>
        <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full">
          <p className="text-slate-900">Admin</p>
          <img
            src="/p.jpg"
            alt=""
            className="w-[35px] h-[35px] rounded-full border border-slate-300 p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
