import React, {Component} from 'react';
import logo from './assets/pollsta.png';
import './App.css';
import {default as IconBase} from 'react-icon-base';
import StripeWrapper from './Stripe/StripeWrapper';
import {Motion, spring} from 'react-motion'

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            visible: false
        }
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
                <header className="nav-bar">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <span className="title"> Pollsta</span>
                </header>

                <div className="jumbotron">
                    <span className="title main">Pollsta</span>
                    <StripeWrapper/>
                    <div className="describe-me">
                        <h1> The easiest way to collect your answers!</h1>
                        <h3>Enter your phone number.<br/>
                            Pay $5.<br/>
                            You'll be up and running in <span className="linethrough">minutes</span> a minute!</h3>
                        &nbsp;
                        <h1 className="questions pointer" onClick={() => this.toggleQuestions()}>Questions?
                            <IconBase style={{marginLeft: '6px'}} viewBox="0 0 1792 1896.0833" {...this.props}>
                                <g>
                                    <path
                                        d="m896 1664q-26 0-44-18l-624-602q-10-8-27.5-26t-55.5-65.5-68-97.5-53.5-121-23.5-138q0-220 127-344t351-124q62 0 126.5 21.5t120 58 95.5 68.5 76 68q36-36 76-68t95.5-68.5 120-58 126.5-21.5q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z"/>
                                </g>
                            </IconBase>
                        </h1>
                    </div>
                </div>
                <div style={{position: 'absolute', left: '50%'}}>

                    <div className="pointer" style={{position: 'relative', left: '-50%' }} onClick={() => this.toggleQuestions()}>
                        <Motion style={{x: spring(this.state.visible ? 280 : 0)}}>
                            {({x}) =>
                                // children is a callback which should accept the current value of
                                // `style`

                                <div className="card" style={{
                                    WebkitTransform: `translate3d(0, ${-x}px, 0)`,
                                    transform: `translate3d(0, ${-x}px, 0)`,
                                }}>
                                    <div className="title" style={{color: '#767676'}}>Pollsta</div>

                                    <p>You will be contacted by a polling phone number POLLSTA has created for you. </p>
                                    <p>Once you activate polling, all polling participants can send in their response via
                                        SMS/text!</p>
                                    <p>Upon closing polling, all unique entries will be tallied and sent back to
                                        you.</p>
                                    So simple!

                                </div>
                            }
                        </Motion>
                    </div>
                </div>


            < /div>
        );
    }
}

export default App;
