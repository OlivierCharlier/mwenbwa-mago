import React, {Component} from "react";
import Image from "../assets/images/user.svg";
import axios from "axios";

export default class Register_field extends Component {
    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        //this.onChangeBirthday= this.onChangeBirthday.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            firstname: "",
            lastname: "",
            password: "",
            email: "",
            birthday: "",
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        const userObject = {
            username: this.state.username,
            email: this.state.email,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            password: this.state.password,
        };

        axios
            .post("/register", userObject)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });

        this.setState({
            name: "",
            email: "",
            firstname: "",
            lastname: "",
            password: "",
        });
    }

    render() {
        return (
            <div className={"main"}>
                <div className={"picture"}>
                    <img src={Image} />
                </div>
                <form onSubmit={this.handleSubmit} className={"register"}>
                    <label htmlFor={"username"}>{"Username:"}</label>
                    <input
                        type={"text"}
                        id={"username"}
                        name={"username"}
                        placeholder={"Username"}
                        value={this.state.username}
                        onChange={e =>
                            this.setState({username: e.target.value})
                        }
                        required
                    />
                    <label htmlFor={"firstname"}>{"Firstname:"}</label>
                    <input
                        type={"text"}
                        id={"firstname"}
                        name={"firstname"}
                        placeholder={"Firstname"}
                        value={this.state.firstname}
                        onChange={e =>
                            this.setState({firstname: e.target.value})
                        }
                        required
                    />

                    <label htmlFor={"lastname"}>{"Lastname:"}</label>
                    <input
                        type={"text"}
                        id={"lastname"}
                        name={"lastname"}
                        placeholder={"Lastname"}
                        value={this.state.lastname}
                        onChange={e =>
                            this.setState({lastname: e.target.value})
                        }
                        required
                    />

                    <label htmlFor={"password"}>{"Password:"}</label>
                    <input
                        type={"password"}
                        id={"password"}
                        placeholder={"Password"}
                        value={this.state.password}
                        onChange={e =>
                            this.setState({password: e.target.value})
                        }
                        required
                    />

                    <label htmlFor={"email"}>{"Email:"}</label>
                    <input
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        placeholder={"Email"}
                        value={this.state.email}
                        onChange={e =>
                            this.setState({lastname: e.target.value})
                        }
                        required
                    />

                    <label htmlFor={"birthday"}>{"Birthday:"}</label>
                    <input
                        type={"date"}
                        id={"birthday"}
                        name={"birthday"}
                        placeholder={"Birthday"}
                        required
                    />
                    <div className={"button"}>
                        <input
                            type={"submit"}
                            className={"submit"}
                            value={"submit"}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
