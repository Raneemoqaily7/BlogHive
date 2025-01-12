import React from "react";
import styles from "./blogBage.module.css"
import CardList from "../../components/cardList/CardList";
import Menu from "../../components/Menu/Menu";


const BlogPage = () => {
    return (
        <div className={styles.container}>

            <h2 className={styles.title}>Style Blog</h2>
            <div className={styles.content}>
                <CardList />
                <Menu />
            </div>
        </div>
    )

}

export default BlogPage;