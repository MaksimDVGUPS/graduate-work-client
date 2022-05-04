import React from "react";
import Header from "../Header/Header";
import styles from "./MainLayout.module.scss"
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

    return (
        <div className={styles.MainLayout}>
            <Header />
            <div className={styles.MainLayout__Content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout;