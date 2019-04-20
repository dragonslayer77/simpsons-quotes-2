import React, { Fragment, Component } from 'react';
import ObtainQuotation from './ObtainQuotation';
import DisplayQuotation from './DisplayQuotation';

const sampleQuotation = {
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: 'Nelson Muntz',
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    characterDirection: 'Left'
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotation: sampleQuotation
        };
    }

    getQuotation() {
        /* fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
            .then(response => response.json())
            .then(data => {
                console.log(data.character);
            }); */
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
            .then(x => x.json()) // result conversion in JSON 
            .then(data => {
                this.setState({
                    quotation: data[0]
                  });
            });

    }


    render() {
        return (
            <Fragment>
                <DisplayQuotation quotation={this.state.quotation} />
                <ObtainQuotation selectQuotation={() => this.getQuotation()} />

            </Fragment>
        );
    }
}
export default App;
