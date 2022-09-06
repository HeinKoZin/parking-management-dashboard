import { MdSpaceDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
	let activeClassName = "bg-slate-200 mr-4 rounded-r-lg cursor-pointer";
	return (
		<div className="py-10 flex flex-col gap-4">
			<NavLink
				to="/"
				className={({ isActive }) => (isActive ? activeClassName : undefined)}
			>
				<div className={styles.menu_link}>
					<MdSpaceDashboard className={styles.menu_icon} />
					<p className={styles.menu_text}>Home</p>
				</div>
			</NavLink>

			<NavLink
				to="/users"
				className={({ isActive }) => (isActive ? activeClassName : undefined)}
			>
				<div className={styles.menu_link}>
					<FiUsers className={styles.menu_icon} />
					<p className={styles.menu_text}>User</p>
				</div>
			</NavLink>
		</div>
	);
}

export default Sidebar;
