import React from 'react';
import axios from 'axios';

// set up a class component that has state for doggos
// fetch data from 'https://dog.ceo/api/breed/husky/images'
// set that data to state when it returns
// render the data in the render function

class App extends React.Component {
    state = {
        doggos: [],
        doggoText: '',
    }

    componentDidMount() {
        console.log('APP: Component did Mount')
        axios.get('https://dog.ceo/api/breed/husky/images')
        .then(res => {
            console.log(res.data.message)
            this.setState({
                doggos: res.data.message
            })

        })
        .catch(err => {
            console.log(err)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.doggos !== this.state.doggos){
            if (this.state.dogText === "chihuahua") {
                axios.get("https://dog.ceo/api/breed/husky/images")
                    .then((res)=>{
                        this.setState({
                            doggos: res.data.message
                        })
                    })
                    .catch(err=>{
                        console.log(err);
                    });
            }
        }
    }

    handleChanges = (event) => {
        this.setState({
            doggoText: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://dog.ceo/api/breed/${this.state.doggoText}/images`)
        .then(res => {
            console.log(res.data.message)
            this.setState({
                doggos: res.data.message
            })

        })
        .catch(err => {
            console.log(err)
        })

    }

    render() {
        console.log('rendering');
        return (
          <div className="App">
            <h1>Hello Doggos</h1>

            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.doggoText} onChange={this.handleChanges} />
            </form>

            <div className="doggos">
              {this.state.doggos.map(doggo => (
                <img width="200" src={doggo} key={doggo} alt={doggo} />
              ))}
            </div>
          </div>
        );
      }
}

export default App;