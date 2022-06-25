import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup.js";
import { changeActiveSidebarItem } from "../../redux/actions/navigationActions";
import cn from "classnames";
import AdnLogo from "../Icons/AdnLogo";
import { Buffer } from "buffer";

const Sidebar = (props) => {
  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);
  var role = JSON.parse(Buffer.from(token?.split('.')[1], 'base64').toString());
  // Redux Hooks
  const dispatch = useDispatch();

  const { sidebarOpened, activeItem } = useSelector(
    (state) => state.navigation
  );

  useEffect(() => {
    if (sidebarOpened) {
      setBurgerSidebarOpen(true);
    } else {
      setTimeout(() => {
        setBurgerSidebarOpen(false);
      }, 0);
    }
  }, [sidebarOpened]);

  return (
    <nav className={cn(s.root, { [s.sidebarOpen]: burgerSidebarOpen })}>
      <Link className={s.logo} to="/">
        <AdnLogo />
      </Link>

      <ul className={s.nav}>
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={activeItem}
          header="Dashboard"
          isHeader
          iconName={<i className={"eva eva-home-outline"} />}
          link="/admin/dashboard"
          index="dashboard"
        />

        {/* <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={activeItem}
          header="Gestion des postes"
          isHeader
          iconName={<i className={"eva eva-code"} />}
          link="/admin/offres/all"
          index="offres"
          childrenLinks={[
            {
              header: "postes",
              link: "/admin/postes",
            },
          ]}
        /> */}
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={activeItem}
          header="Gestion des postes"
          isHeader
          iconName={<i className={"eva eva-code"} />}
          link="/admin/postes/all"
          index="postes"
          childrenLinks={[
            {
              header: "postes",
              link: "/admin/postes",
            },
          ]}
        />
        {role.roleId == 1 && (
          <>
            <LinksGroup
              onActiveSidebarItemChange={(activeItem) =>
                dispatch(changeActiveSidebarItem(activeItem))
              }
              activeItem={activeItem}
              header="Gestion des utilisateurs"
              isHeader
              iconName={<i className={"eva eva-code"} />}
              link="/admin/users/all"
              index="users"
              childrenLinks={[
                {
                  header: "utilisateurs",
                  link: "/admin/users",
                },
              ]}
            />
          </>
        )
        }
      </ul>
    </nav >
  );
};

export default withRouter(Sidebar);
