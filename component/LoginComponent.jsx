import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService';

class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
//        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
      console.log(event);
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    handleSubmit() {
//			event.preventDefault(); // отмена действия по умолчанию
			console.log("log");
			AuthenticationService
            .executeBasicAuthenticationService(this.state.username, this.state.password)
            .then(() => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/courses`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }

//    loginClicked() {
//
//        AuthenticationService
//            .executeBasicAuthenticationService(this.state.username, this.state.password)
//            .then(() => {
//                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
//                this.props.history.push(`/courses`)
//            }).catch(() => {
//                this.setState({ showSuccessMessage: false })
//                this.setState({ hasLoginFailed: true })
//            })
//
//    }

    render() {
        return (
//            <div>
//                <h1>Login</h1>
//                <div className="container">
//                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
//                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
//                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
//                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
//                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
//                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
//                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
//                </div>
//            </div>

            <div>
              <div className="login-container">
              <div className="login-container__background"></div>
              {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
              {this.state.showSuccessMessage && <div>Login Sucessful</div>}
              <form className="login-container__window" onSubmit={this.handleSubmit}>
                <p className="login-container__title">Войти</p>
                <div className="login-container__form">
                  <input type="name" id="login" className="login-container__input" maxLength="20" value={this.state.username} name="username" onChange={this.handleChange} required/>
                  <label htmlFor="login" className="login-container__label">Логин</label>
                  <input type="password" id="password" className="login-container__input" maxLength="20" name="password" value={this.state.password} onChange={this.handleChange} required/>
                  <label htmlFor="password" className="login-container__label">пароль</label>
                  <a href="#" className="login-container__remember-password">Не помню пароль</a>
                </div>
                <div className="login-container__buttons">
                  <button type="submit" className="login-container__button button login-container__button--login">Войти</button>
                  <a href="#" className="login-container__button button login-container__button--registration">Зарегистрироваться</a>
                </div>
              </form>
            </div>
          </div>
        )
    }
}

export default LoginComponent
