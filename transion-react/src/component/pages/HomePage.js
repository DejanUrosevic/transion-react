import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { newMapping } from '../../action/action';
import { Redirect, withRouter } from 'react-router-dom'; 

class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.showAgencies = this.showAgencies.bind(this);
        this.showImports = this.showImports.bind(this);
        this.showConfiguration = this.showConfiguration.bind(this);
        this.showMappings = this.showMappings.bind(this);
        this.showNewAgencyMapping = this.showNewAgencyMapping.bind(this);
        this.showNewTransactionMapping = this.showNewTransactionMapping.bind(this);
        this.showAllMapping = this.showAllMapping.bind(this);
        this.state = {
            agenciesButtonStyle : {},
            importsButtonStyle: {},
            configurationButton: {},
            hr1Style: {display:'none'},
            agenciesStyle: {display:'none'},
            importsStyle: {display:'none'},
            configurationsStyle: {display: 'none'},
            mappingsStyle: {display: 'none'},
            mappingType:''
        };
    }

    componendDidMount(){
        console.log("Mounted");
    }

    showAgencies = (e) => {
        this.setState({
            agenciesButtonStyle: {padding: '40px', backgroundColor: '#CCC', borderColor: 'rgba(0,0,0,0.9)'},
            importsButtonStyle: {padding: '30px 30px', backgroundColor: '#699DB6', borderColor: 'rgba(0,0,0,0.3)'},
            configurationButton : {},
            hr1Style: {display: 'block'},
            agenciesStyle: {display: 'block'},
            importsStyle: {display: 'none'},
            configurationsStyle: {display: 'none'},
            mappingsStyle: {display: 'none'}
        });
    };

    showImports = (e) => {
        this.setState({
            agenciesButtonStyle: {padding: '30px 30px', backgroundColor: '#eee', borderColor: 'rgba(0,0,0,0.3)'},
            importsButtonStyle: {padding: '40px', backgroundColor: '#3C677B', borderColor: 'rgba(0,0,0,0.9)'},
            configurationButton : {},
            hr1Style: {display: 'block'},
            agenciesStyle: {display: 'none'},
            importsStyle: {display: 'block'},
            configurationsStyle: {display: 'none'},
            mappingsStyle: {display: 'none'}
        });
    };

    showConfiguration = () => {
        this.setState({
            agenciesButtonStyle: {},
            importsButtonStyle: {},
            configurationButton : {padding: '40px', backgroundColor: '#CCC', borderColor: 'rgba(0,0,0,0.9)'},
            hr1Style: {display: 'block'},
            agenciesStyle: {display: 'none'},
            importsStyle: {display: 'none'},
            configurationsStyle: {display: 'block'},
            mappingsStyle: {display: 'none'}
        });
    };

    showMappings = () => {
        this.setState({
            agenciesButtonStyle: {},
            importsButtonStyle: {},
            configurationButton : {padding: '40px', backgroundColor: '#CCC', borderColor: 'rgba(0,0,0,0.9)'},
            hr1Style: {display: 'block'},
            agenciesStyle: {display: 'none'},
            importsStyle: {display: 'none'},
            configurationsStyle: {display: 'block'},
            mappingsStyle: {display: 'block'}
        });
    }

    showNewAgencyMapping() {
        this.props.newMapping();
        this.props.history.push("/mapping/new/" + "client");
    }

    showNewTransactionMapping() {
        this.props.newMapping();
        this.props.history.push("/mapping/new/" + "transaction");
    }

    showAllMapping() {
        this.props.history.push("/mapping");
    }

    render() {
      return (
        <div className = "b2">
            <Header />

            <h1 align="center">
			    Please select one of options...
		    </h1>

            <div className="row">
                <div align="center" className="animated fadeInUp">
                    <p>
                        <a ref={(input) => { this.textInput = input; }} href="#" className="btn" style={this.state.agenciesButtonStyle} onClick={this.showAgencies}>Agencies</a>  
                        <a ref="importsButton" href="#" className="btn btn-blue" style={this.state.importsButtonStyle} onClick={this.showImports} >Import</a>
                        <a href="#" className="btn btn-red">Export</a>
                        <a href="#" className="btn btn-green">Tables</a>
                        <a href="#" className="btn btn-green" style={this.state.configurationButton} onClick={this.showConfiguration} >Configurations</a>
                    </p>	
                </div>
            </div>

            <hr id="hr1" className="animated fadeInDown" style={this.state.hr1Style}/>

            <div ref="agencies" id="agencies" align="center" className="animated fadeInDown" style={this.state.agenciesStyle}>
                <p>
                    <a href="#" className="btn">List all agencies</a>
                    <a href="#" className="btn btn-blue">Find agency</a>
                    <a href="#" className="btn btn-red">Transactions</a>
                    <a href="#" className="btn btn-green">Search</a>
                    <a href="#" className="btn btn-green">Search</a>
                    <a href="#" className="btn btn-green">Search</a>
                </p>	
            </div>

            <div ref="imports" id="imports" align="center" className="animated fadeInDown" style={this.state.importsStyle}>
                <p>
                    <a href="#" className="btn">List all imports</a>
                    <a href="#" className="btn btn-blue">Import new file</a>
                    <a href="#" className="btn btn-red">Something else</a>
                    <a href="#" className="btn btn-green">Search</a>
                </p>	
            </div>

            <div id="configurations" align="center" className="animated fadeInDown" style={this.state.configurationsStyle} >
                <p>
                    <a href="#" className="btn" onClick={this.showMappings} >Mapping</a>
                    <a href="#" className="btn btn-blue">Import new file</a>
                    <a href="#" className="btn btn-red">Something else</a>
                    <a href="#" className="btn btn-green">Search</a>
                </p>
            </div>

            <div id="mappings" align="center" className="animated fadeInDown" style={this.state.mappingsStyle} >
                <p>
                    <a className="btn" onClick={this.showNewAgencyMapping} >New agency mapping</a>
                    <a className="btn" onClick={this.showNewTransactionMapping}>New transaction mapping</a>
                    <a className="btn" onClick={this.showAllMapping}>All mapping</a>
                </p>
            </div>

            <Footer />
        </div>
      )
    }
}

HomePage.PropTypes = {
    newMapping: PropTypes.func.isRequired,
}

export default withRouter(connect(null, { newMapping })(HomePage));