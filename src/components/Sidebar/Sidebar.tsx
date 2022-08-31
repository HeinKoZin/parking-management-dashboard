import React from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaUsersCog } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className="py-10 flex flex-col gap-4">
      <div className={styles.menu}>
        <div className={styles.menu_link}>
          <MdSpaceDashboard className={styles.menu_icon} />
          <p className={styles.menu_text}>Dashboard</p>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_link}>
          <FaUsersCog className={styles.menu_icon} />
          <p className={styles.menu_text}>Service</p>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_link}>
          <FiUsers className={styles.menu_icon} />
          <p className={styles.menu_text}>User</p>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_link}>
          <ImUsers className={styles.menu_icon} />
          <p className={styles.menu_text}>Employee</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
