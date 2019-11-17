import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';
import logo from '../logo.png';

class MenuComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
//            <header>
//                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                    <div><a href="http://www.in28minutes.com" className="navbar-brand">in28Minutes</a></div>
//                    <ul className="navbar-nav">
//                        <li><Link className="nav-link" to="/courses">Courses</Link></li>
//                    </ul>
//                    <ul className="navbar-nav navbar-collapse justify-content-end">
//                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
//                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
//                    </ul>
//                </nav>
//            </header>
              <header className="header">
                <div className="header__logo logo-container">
                  <a href="http://www.kstu.ru/"><img src={logo} alt="логотип книту" className="logo-container__logo logo"/></a>
                  <h1 className="logo-container__title title"><a href="#" className="title__link">Вестник технологического университета</a></h1>
                </div>

                <div className="header__user">
                  <button className="account-button account-button--login button header__button">войти</button>
                  <button className="account-button account-button--registration button header__button">регистрация</button>
                </div>
              </header>
        )
    }
}

export default withRouter(MenuComponent)
