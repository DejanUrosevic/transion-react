import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import { PropTypes } from 'prop-types';
import { selectFieldForMapping, saveMapping } from '../../action/action';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
import Box from '../draganddrop/Box';
import BoxItem from '../draganddrop/BoxItem';

class MappingNewPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
                        fields: [],
                        items: [],
                        divStyle: {
                            border: '2px solid black'
                        },
                        label: ''
                     };
        this.loadFields = this.loadFields.bind(this);
        this.addField = this.addField.bind(this);
        this.saveMapping = this.saveMapping.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    componentDidMount() {
        this.loadFields();
    }

    loadFields = () => {
        var self = this;
        this.props.selectFieldForMapping()
            .then(function(response){
                var items = self.state.items;
                var fields = self.state.fields;
                for(var i = 0; i < response.length; i++){
                    if(response[i].required){
                        items.push(response[i]);
                    }else{
                        fields.push(response[i]);
                    }
                }
                
                self.setState({fields: fields, items : items});
            });
    };

    addField(field){
        this.state.items.push(field);
    }

    saveMapping(){
        var mapping = {
            label: this.state.label,
            type: 'CLIENT',
            fields: this.state.items
        }
        this.props.saveMapping(mapping)
            .then(function(response){
                console.log(response);
            });
        
        this.props.history.push("/home");
    }

    onChange = e =>
    this.setState({
        label : e.target.value
    });

    render() {
        
      return (
        <div className = "b2">
            <Header />
            
            <div className="container-fluid">  
                <div className="panel-group text-center" style={{backgroundColor:'white'}}>
                    <div className="panel panel-default">
                        <div className="panel-heading"><p> Label <br/></p></div>
                        <div className="panel-body">
                            <input
                                id="label" 
                                name="label"
                                size="30"
                                value={this.state.label}
                                onChange={this.onChange}
                                required  
                                className="form-control" />
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading"><p> Fields <br/></p></div>
                        <div className="panel-body">
                        {
                            this.state.fields.map(function(field){
                                return (<div key = {field.name}>
                                            <DragDropContainer targetKey="foo"  onDragStart={()=>(console.log('start'))}
                                                                                onDrag={()=>(console.log('dragging'))}
                                                                                onDragEnd={()=>(console.log('end'))}
                                                                                onDrop={(e)=>(console.log('daadadadadas'))}
                                                                                dragData={field}>
                                                <div styles="{{border-style: 'solid;'}}">{field.name}</div>
                                            </DragDropContainer><br/>
                                        </div>)
                            })
                        }
                        </div>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading"><p> Fields <br/></p></div>
                        <div className="panel-body">    
                            <Box targetKey="foo" items={this.state.items} addItem={this.addField}/>
                        </div>
                    </div> 
                    <div className="panel panel-default">
                        <div className="panel-body">    
                            <button type="button" className="btn btn-success" onClick={this.saveMapping}>Success</button>
                        </div>
                    </div> 
                </div>
            </div>
           
                
            <Footer />
        </div>
      )
    }
}

MappingNewPage.PropTypes = {
    selectFieldForMapping : PropTypes.func.isRequired,
    saveMapping : PropTypes.func.isRequired
}

export default withRouter(connect(null, { selectFieldForMapping, saveMapping })(MappingNewPage));