let LoginWindow = React.createClass({
    getInitialState: function() {
        return {
            isValid: 'true',
            buttonImgUrl: './img/loginBut.png'
        }
    },
    handleSubmit: function (e){
        e.preventDefault();

        let loginData = {};

        loginData.login = (this.refs.login.value);
        loginData.password = (this.refs.password.value);

        this.setState({buttonImgUrl: './img/loginButLoad.png'});

        $.post('http://localhost:8080/login', loginData, (result) => {
            if(result.Auth === 'Denied') {
                this.setState({
                    isValid: 'Denied',
                    buttonImgUrl: './img/loginBut.png'

                })
            } else if (result.Auth === 'Logged') {
                this.setState({
                    isValid: 'Success'
                })
            }
        });
        ///
        for(let i = 0; i < 1000000000; i++);
        this.setState({isValid: 'Denied',
        buttonImgUrl: './img/loginBut.png'});
        ///
    },

    render: function() {
        let error = '';
        if (this.state.isValid === 'Denied') error = 'error';
        else if(this.state.isValid === 'Success') {
            return (
                <img id = 'success' src='./img/loginSuccessed.png'/>
            );
        };
        return (
            <form id = 'loginForm' onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                        <img src='./img/logoLogin.png'/>
                    </li>
                    <li>
                        <input id = {`loginInput-${error}`} type = 'text' placeholder = 'Login' ref = 'login'></input>
                    </li>
                    <li>
                        <input id = 'passwordInput' type = 'text' placeholder = 'Password' ref = 'password'></input>
                    </li>
                    <li>
                        <button id = 'loginButton'  ref = 'button'><img ref = 'buttonImg' src = {this.state.buttonImgUrl}/></button>
                    </li>
                </ul>
            </form>
        );
    }
});

ReactDOM.render(<LoginWindow props = {true} />, document.getElementById('loginRoot'));