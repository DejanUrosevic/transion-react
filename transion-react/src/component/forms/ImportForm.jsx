import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { allMappings } from '../../action/action';

class ImportForm extends React.Component{

    constructor(props){
        super(props);
        this.loadMapping = this.loadMapping.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onChangeUpload = this._onChangeUpload.bind(this);
        this.saveNewImport = this.saveNewImport.bind(this);
        this.state = {
            mappings: [],
            options: [],
            file: undefined
        }
    }

    componentDidMount() {
        this.loadMapping();
    }

    loadMapping(){
        var self = this;
        self.props.allMappings()
            .then(function(response){
                self.setState({mappings: response, selectedMapping: response[0].id});
                
                self.state.mappings.map((mapping) => {
                    self.state.options.push({ value: mapping.id, label: mapping.label});
                })
            });
        
    }

    _onChange(e){
        console.log(e.target.value);
        this.setState({selectedMapping:e.target.value});
    }

    _onChangeUpload(e){
        console.log(e.target.files[0]);
        this.setState({file:e.target.files[0]});
    }

    saveNewImport(){
        var data = {
            mapping: this.state.selectedMapping,
            file: this.state.file
        }
        this.props.saveImport(data);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 animated fadeInUp" style={{padding: '10px'}}>
                        <div className="panel panel-info">
                            <div className="panel-heading text-center">
                                <h3 className="panel-title">New import</h3>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-9 col-md-offset-1"> 	  			
                                        <table className="table" rules="none">
                                            <tbody>
                                                <tr>
                                                    <td> <b>Type of mapping: </b> </td>
                                                    <td> 
                                                        <select name="type" className="form-control" value={this.state.selectedMapping} onChange={this._onChange} required>
                                                            {
                                                                this.state.mappings.map((mapping, i) => {
                                                                    return(
                                                                        <option key={i} value={mapping.id}>{mapping.label}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td> <b> Import file </b> </td>
                                                    <td>
                                                        <input type="file" name="importFile" onChange={this._onChangeUpload} required />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-footer">
                                <div align="center">
                                    <button type="button" className="btn btn-md btn-success" data-toggle="tooltip" data-placement="bottom" title="Save import" onClick={this.saveNewImport}> <i className="fa fa-check"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ImportForm.PropTypes = {
    allMappings: PropTypes.func.isRequired,
    saveImport: PropTypes.func.isRequired
}

export default withRouter(connect(null, { allMappings })(ImportForm));