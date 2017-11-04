import React, {Component} from 'react';
import logo from './assets/pollsta.png';
import './App.css';
import {default as IconBase} from 'react-icon-base';
import StripeWrapper from './Stripe/StripeWrapper';
import {Motion, spring} from 'react-motion'
import {CSSTransitionGroup} from 'react-transition-group'


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            visible: false,
            statements: [' collect quick answers!', ' collect survey results!', ' ask him/her on a date! Maybe not...', ' conduct a simple poll!', " see which project people love!", ' vote for a chairperson!', ' validate your ideas!', ' ask your parents if you should take in the dog!', " get anonymous feedback", " find out if you should implement a feature!",],
            statement: [' collect quick answers!']
        }
    }

    componentDidMount() {
        var num = 0;

        setInterval(() => {
            num = (num + 1) % 4;
            this.setState({
                statement: [this.state.statements[num]]
            })
        }, 5000);

    }

    renderItems() {
        return this.state.statement.map((item, i) => {
            return (
                <span key={item}>
                    {item}
                </span>
            );
        });
    }

    toggleQuestions() {
        this.setState({
            ...this.state,
            visible: !this.state.visible
        })
    }


    render() {
        return (
            <div className="App">

                <div className="jumbotron">
                    <span className="title main">Pollsta</span>
                    <div className="inputWrapper">
                        <input
                            className="input"
                            type="text" name="phoneNumber" id="phoneNumber"
                            value={this.state.name}
                            onChange={this.changeHandler}
                            autoComplete="off"
                            maxLength="50"
                        />
                    </div>
                    <StripeWrapper/>
                    <div className="describe-me">
                        <h1 style={{color: '#fbffb8'}}> The easiest way to

                            <CSSTransitionGroup
                                transitionName="example"
                                transitionEnterTimeout={500}
                                transitionLeave={false}>
                                {this.renderItems()}
                            </CSSTransitionGroup>
                        </h1>
                        <h2><span style={{textDecoration: 'underline'}}>Simple Instructions:</span> <br/></h2>
                        <h3>

                            1. Enter your phone number.<br/>
                            2. Pay $5.<br/>
                            3. You'll be up and running in <span className="linethrough">minutes</span> a minute!</h3>
                        &nbsp;
                        <h1 className="questions pointer" onClick={() => this.toggleQuestions()}>Questions?
                            <IconBase style={{marginLeft: '6px', color: '#ff503a'}} viewBox="0 0 1792 1896.0833">
                                <g>
                                    <path
                                        d="m896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"/>
                                </g>
                            </IconBase>
                        </h1>
                    </div>
                </div>
                <div style={{position: 'absolute', left: '50%'}}>

                    <div className="pointer" style={{position: 'relative', left: '-50%'}}
                         onClick={() => this.toggleQuestions()}>
                        <Motion style={{x: spring(this.state.visible ? 350 : 0)}}>
                            {({x}) =>
                                // children is a callback which should accept the current value of
                                // `style`

                                <div className="card" style={{
                                    WebkitTransform: `translate3d(0, ${-x}px, 0)`,
                                    transform: `translate3d(0, ${-x}px, 0)`,
                                }}>
                                    <div className="title" style={{color: '#767676'}}>Pollsta Instructions</div>
                                    <div className="paragraph">

                                        <p>You will be contacted by the polling phone number POLLSTA has created for
                                            you. </p>
                                        <p>After you activate polling, all participants can enter their responses (to
                                            that same phone number) via
                                            SMS/text!</p>
                                        <p>When you, the administrator, close the poll, all unique entries will be
                                            tallied
                                            and sent back to
                                            you.</p>
                                        <br/>
                                        SO SIMPLE! <br/>
                                        <br/>
                                        <p>Love our product? Need customizations? Contact us!</p>
                                    </div>

                                </div>
                            }
                        </Motion>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
