import React from 'react'
import Footer from './Footer'
import { Dna } from 'react-loader-spinner'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 2000)
    }
    render() {
        if (this.state.loading) {
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
                    <AppBar position="static">
                        <Toolbar variant="dense">
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            </IconButton>
                            <Typography variant="h6" color="inherit" component="div">
                                Photos
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Footer />
                </div>
            )
        }
    }
}




export default App;