import React, { Component } from 'react';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            dropdown: 0,
            language: "jv",
            checkStatus: true,
        };
    }

    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.username + " " + this.state.password);
    }

    render() {
        return (
            <div className="container"
                style={{marginTop: 10}}>
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div className="panel panel-default">
                        <div className="panel-body">                                          
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <legend>Form title</legend>
                            
                                <div className="form-group">
                                    <label>UserName</label>
                                    <input type="text" className="form-control" id="" 
                                        placeholder="Username"
                                        name="username"
                                        onChange={this.handleChange.bind(this)}
                                    />

                                    <input type="text" className="form-control" id="" 
                                        placeholder="Password"
                                        name="password"
                                        onChange={this.handleChange.bind(this)}
                                        style={{marginTop: 10}}
                                    />

                                </div>                          

                                <label>Gioi tinh: </label>
                                <select className="form-control"
                                    name="dropdown"
                                    style={{marginBottom: 10}}
                                    value={this.state.dropdown}
                                    onChange={this.handleChange.bind(this)}>
                                    <option value={0}>Nu</option>
                                    <option value={1}>Nam</option>
                                </select>       

                                <div className="radio">
                                    <label>
                                        <input type="radio"
                                            name="language"
                                            value="js"
                                            onChange={this.handleChange.bind(this)}
                                            checked={this.state.language === "js"}
                                        />
                                        Javascript
                                    </label>
                                    <br/>
                                    <label>
                                        <input type="radio"
                                            name="language"
                                            value="jv"
                                            onChange={this.handleChange.bind(this)}
                                            checked={this.state.language === "jv"}
                                        />
                                        Java
                                    </label>
                                </div>

                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox"
                                            name="checkStatus"
                                            value={true}
                                            onChange={this.handleChange.bind(this)}
                                            checked={this.state.checkStatus === true}
                                        />
                                        {this.state.checkStatus === true ? "Active" : "Deactive"}
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary">Save</button>
                                <button type="submit" className="btn btn-default"
                                    style={{marginLeft: 10}}>Remove</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
            
        );  
    }
}

export default App;
