import React from 'react'
import Footer from './Footer'
import { Dna } from 'react-loader-spinner'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: true }), 5000)
    }
    render() {
        if (!this.state.loading) {
            return (
                <div>
                    <Dna
                        visible={true}
                        height="500"
                        width="500"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <Footer />
                </div>
            )
        }
    }
}




export default App;