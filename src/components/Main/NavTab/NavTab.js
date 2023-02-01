import React from "react";
import './NavTab.css'

function NavTab() {
    return (
        <section className="nav-tab">
            <ul className="nav-tab__list">
                <a className="nav-tab__link" href="#project">О проекте</a>
                <a className="nav-tab__link" href="#techs">Технологии</a>
                <a className="nav-tab__link" href="#student">Студент</a>
            </ul>
        </section>
    );
}

export default NavTab;