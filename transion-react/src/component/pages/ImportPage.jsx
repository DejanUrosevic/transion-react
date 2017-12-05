import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import Footer from '../footer';
import ImportForm from '../forms/ImportForm';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectAllImport, allMappings, saveImport } from '../../action/action';
import Moment from 'react-moment';

class ImportPage extends React.Component {

    constructor(props){
        super(props);
        this.loadAllImport = this.loadAllImport.bind(this);
        this.saveImport = this.saveImport.bind(this);
        this.state = {
            imports : [],
            selectedMapping: undefined,
            file: undefined 
        }
    }

    componentDidMount() {
        this.loadAllImport();
    }

    loadAllImport(){
        var self = this;
        self.props.selectAllImport()
            .then(function(response){
                self.setState({imports: response});
            });
    }

    saveImport(data){
        console.log(data);
        this.props.saveImport(data);
    }

    render(){   
        return(
            <div className = "b2">
                <Header/>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 animated fadeInUp" style={{padding: '10px'}}>
                        <div className="panel panel-info">
                            <div className="panel-heading text-center">
                                <h3 className="panel-title">Imports</h3>
                            </div>
                            <br/>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-8 col-md-offset-2">
                                        { this.state.imports.length === 0 ? <div className="alert alert-info col-md-4 col-md-offset-4 animated fadeInDown" align="center">There are no imports</div> : null }
                                        { this.state.imports.length > 0 ? <table className="table table-hover animated fadeInUp">
                                            <thead>
                                                <th> ID </th>
                                                <th> Mapping </th>
                                                <th> Created on </th>
                                                <th> Line number </th>
                                            </thead>
                                            <tbody>
                                                { 
                                                    this.state.imports.map((imp, i) => {
                                                        return(
                                                            <tr key={i}>
                                                                <td>{imp.id}</td>
                                                                <td>{imp.mapping.label}</td>
                                                                <td><Moment format="DD/MM/YYYY">{imp.createdOn}</Moment></td>
                                                                <td>{imp.lineNumber}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table> : null }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr className="style13" />
                <div align="center" className="animated fadeInUp">
                    <a className="btn" >New import</a>
                </div>

                <ImportForm saveImport={this.saveImport} />
                <Footer/>
            </div>
        )
    }
}

ImportPage.PropTypes = {
    selectAllImport: PropTypes.func.isRequired,
    allMappings: PropTypes.func.isRequired,
    saveImport: PropTypes.func.isRequired
}

export default withRouter(connect(null, { selectAllImport, allMappings, saveImport })(ImportPage));