import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import { PropTypes } from 'prop-types';
import { selectFieldForMapping } from '../../action/action';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

class MappingNewPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {fields: []};
        this.loadFields = this.loadFields.bind(this);
    }
    
    componentDidMount() {
        this.loadFields();
    }

    loadFields = () => {
        var self = this;
        this.props.selectFieldForMapping()
            .then(function(response){
                self.setState({fields: response});
            });
    }

    render() {
      return (
        <div className = "b2">
            <Header />
                <p> Fields <br/>
                {
                    this.state.fields.map(function(field){
                        return <div>
                                    <DragDropContainer targetKey="foo" >
                                        <div styles="{{border-style: 'solid;'}}">{field.name}</div>
                                    </DragDropContainer><br/>
                                </div>
                    })
                }
                </p>
                

                <DropTarget targetKey="foo" >
                    <p>I'm a valid drop target for the object above since we both have the same targetKey!</p>
                </DropTarget>
            <Footer />
        </div>
      )
    }
}

MappingNewPage.PropTypes = {
    selectFieldForMapping : PropTypes.func.isRequired
}

export default withRouter(connect(null, { selectFieldForMapping })(MappingNewPage));