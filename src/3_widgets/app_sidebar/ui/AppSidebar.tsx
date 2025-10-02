import React from "react";
import {NavLink} from "react-router-dom";
import cls from "./AppSidebar.module.scss";
import {UserStore} from "@/5_entities/user";
import {observer} from "mobx-react";
import {
    adminSidebarLinksState,
    buyerSidebarLinksState,
    sellerSidebarLinksState,
    type SidebarLinksType
} from "@/6_shared";


export const AppSidebar = observer(() => {
    const {meData} = UserStore;
    const currentRole = meData.role;

    const usersRole = {
        admin: adminSidebarLinksState,
        buyer: buyerSidebarLinksState,
        seller: sellerSidebarLinksState,
    };

    const sidebarLinks: SidebarLinksType[] = usersRole[currentRole] || [];

    return (
        <div className={cls.AppSidebar}>
            {sidebarLinks.map((item) => (
                <NavLink to={item.to} key={item.id}>
                    {item.label}
                </NavLink>
            ))}
        </div>
    );
});
