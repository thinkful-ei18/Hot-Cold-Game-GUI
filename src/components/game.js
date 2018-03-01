import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import GuessForm from './guess-form';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          guess: null,
          answer:Math.floor(Math.random() * 101),
          guessList: [],
        };
    }
        userGuess(guess, answer){
            this.setState({guess: Number(guess)});
            this.setState({guessList: [...this.state.guessList, guess]})
    
        }
        responseToGuess(guess, answer){
            const gap = Math.abs(guess - answer);

            if(gap >= 40){
                return 'You are really cold';
            }
            else if (gap >= 30){
                return 'You are cold';
            }
            else if (gap >= 20){
                return 'You are warm'
            }
            else if (gap >= 10){
                return 'You are very warm'
            }
            else if(gap >= 5){
                return 'You are hot!'
            }
            else if (gap >= 1){
                return 'You are very hot!';
            }
            else{
                return 'You guessed right!';
            }
        }
      render(){
    return (
        <div>
            <Header />
            <GuessSection feedback={this.responseToGuess(this.state.guess, this.state.answer)} />
            <GuessForm atSubmit={guess => this.userGuess(guess, this.state.answer)} />
            <GuessCount count={this.state.guessList.length} />
            <GuessList guesses={this.state.guessList} />
        </div>
    );
}
}

export default Game;