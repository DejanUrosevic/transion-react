import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import { allMappings } from '../../action/action';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class MappingPage extends React.Component {

    constructor(props){
        super(props);
        this.loadMappings = this.loadMappings.bind(this);
        this.state = {
            mappings: []
        }
    }

    componentDidMount(){
        this.loadMappings();
    }

    loadMappings(){
        var self = this;
        self.props.allMappings()
            .then(function(response){
                var mappings = self.state.mappings;
                for(var i = 0; i < response.length; i++){
                    mappings.push(response[i]);
                }

                self.setState({mappings: mappings});
            });
    }

    render() {
      return (
        <div className = "b2">
            <Header />
                <p> ADSADAS</p>
            <Footer />
        </div>
      )
    }
}

MappingPage.PropTypes = {
    allMappings : PropTypes.func.isRequired
}

export default withRouter(connect(null, { allMappings })(MappingPage));