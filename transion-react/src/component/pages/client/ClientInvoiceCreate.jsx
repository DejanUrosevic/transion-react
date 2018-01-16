import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../header';
import Footer from '../../footer';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';

class ClientInvoiceCreate extends Component {
    
    
    render() {
        return(
            <div>
                <Header />
                <TextField
                    required
                    id="required"
                    label="Required"
                    defaultValue="Hello World"
                    margin="normal"
                    error="Ovo polje je obavezno"
                />
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(null, {})(ClientInvoiceCreate));
