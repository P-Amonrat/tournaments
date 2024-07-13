import { Link, useLocation } from "@remix-run/react";
import { useContext } from "react";
import { AppContext } from "~/contexts";

interface TiltVerticalMenusProps {
  menus: any[];
  position?: string;
  activeFromQueryString?: boolean;
  style?: React.CSSProperties;
}

export const TiltVerticalMenus: React.FC<TiltVerticalMenusProps> = (
  props: TiltVerticalMenusProps
) => {
  const { activeFromQueryString, menus, position, style } = props;
  const { scheme } = useContext(AppContext);
  const location = useLocation();

  return (
    <ul
      className={`tilt-menu${position ? ` ${position} ` : ""} ${scheme}`}
      style={style}
    >
      {menus.map((menu: any) => (
        <li key={menu.link} className="tilt-menu-item">
          <Link
            className={`tilt-menu-link${
              activeFromQueryString ? " query-string" : ""
            }${
              (!activeFromQueryString &&
                (location.pathname === menu.link ||
                  (menu.link !== "/" &&
                    location.pathname.indexOf(menu.link) > -1))) ||
              (menu.link === "." &&
                location.pathname.split("/").filter((p: string) => p.length > 0)
                  .length === menu.level) ||
              (activeFromQueryString &&
                (location.search === menu.link.substring(1) ||
                  (location.search === "?index" && menu.link === ".")))
                ? " active"
                : ""
            }`}
            to={menu.link}
          >
            {menu.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
