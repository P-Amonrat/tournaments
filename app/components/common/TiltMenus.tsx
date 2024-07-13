import { Link, useLocation } from "@remix-run/react";
import { Tooltip } from "antd";
import { useContext } from "react";
import { AppContext } from "~/contexts";

interface TiltMenusProps {
  menus: any[];
  direction?: string;
  position?: string;
  activeFromQueryString?: boolean;
  preventScrollReset?: boolean;
  style?: React.CSSProperties;
}

export const TiltMenus: React.FC<TiltMenusProps> = (props: TiltMenusProps) => {
  const {
    activeFromQueryString,
    direction,
    menus,
    position,
    preventScrollReset,
    style,
  } = props;
  const { scheme } = useContext(AppContext);
  const location = useLocation();

  const renderLink = (menu: any) => {
    return (
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
        preventScrollReset={preventScrollReset ? preventScrollReset : false}
        target={menu.link.indexOf("http") === 0 ? "_blank" : undefined}
      >
        {menu.label}
      </Link>
    );
  };

  return (
    <ul
      className={`tilt-menu${position ? ` ${position} ` : ""}${
        direction ? ` ${direction} ` : ""
      } ${scheme}`}
      style={style}
    >
      {menus.map((menu: any, index: number) => (
        <li key={index} className="tilt-menu-item">
          {menu.tooltip ? (
            <Tooltip title={menu.tooltip} placement="bottom" arrow={false}>
              {renderLink(menu)}
            </Tooltip>
          ) : (
            renderLink(menu)
          )}
        </li>
      ))}
    </ul>
  );
};
