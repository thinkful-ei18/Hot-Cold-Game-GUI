import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    handleClick(e){

        e.preventDefault();
        this.props.atSubmit(this.testInput.value);
        this.testInput.value = '';

    }
    render(){
    return (
        <form onSubmit={e => this.handleClick(e)}>
            <input ref={input=> {this.testInput = input}} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
}
};

