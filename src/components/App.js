import React from 'react'
import Footer from './Footer'
import { Dna } from 'react-loader-spinner'
class App extends React.Component {
    render() {
        return (
            <div>
                <Footer />
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>
        )
    }
}



export default App;