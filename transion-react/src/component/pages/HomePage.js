import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';


class HomePage extends React.Component {

    constructor(props){
        super(props);
        this.showAgencies = this.showAgencies.bind(this);
        this.showImports = this.showImports.bind(this);
        this.state = {
            agenciesButtonStyle : {},
            importsButtonStyle: {},
            hr1Style: {display:'none'},
            agenciesStyle: {display:'none'},
            importsStyle: {display:'none'}
        };
    }

    componendDidMount(){
        console.log("Mounted");
    }

    showAgencies = (e) => {
        this.setState({
            agenciesButtonStyle: {padding: '40px', backgroundColor: '#CCC', borderColor: 'rgba(0,0,0,0.9)'},
            importsButtonStyle: {padding: '30px 30px', backgroundColor: '#699DB6', borderColor: 'rgba(0,0,0,0.3)'},
            hr1Style: {display: 'block'},
            agenciesStyle: {display: 'block'},
            importsStyle: {display: 'none'}
        });
    };

    showImports = (e) => {
        this.setState({
            agenciesButtonStyle: {padding: '30px 30px', backgroundColor: '#eee', borderColor: 'rgba(0,0,0,0.3)'},
            importsButtonStyle: {padding: '40px', backgroundColor: '#3C677B', borderColor: 'rgba(0,0,0,0.9)'},
            hr1Style: {display: 'block'},
            agenciesStyle: {display: 'none'},
            importsStyle: {display: 'block'}
        });
        /* document.getElementById("importsButton").setAttribute("style", " padding: 40px; background-color: #3C677B; border-color: rgba(0,0,0,0.9);");
        document.getElementById("agenciesButton").setAttribute("style", "padding: 30px 30px; background-color: #eee; border-color: rgba(0,0,0,0.3);")
        document.getElementById("hr1").style.display = "block";
        document.getElementById("agencies").style.display = "none";
        document.getElementById("imports").style.display = "block"; */
    };

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
                        <a ref="agenciesButton" href="#" className="btn" style={this.state.agenciesButtonStyle} onClick={this.showAgencies}>Agencies</a>  
                        <a ref="importsButton" href="#" className="btn btn-blue" style={this.state.importsButtonStyle} onClick={this.showImports} >Import</a>
                        <a href="#" className="btn btn-red">Export</a>
                        <a href="/tables" className="btn btn-green">Tables</a>
                        <a href="#" className="btn btn-green">Configurations</a>
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

            <Footer />
        </div>
      )
    }
};

export default HomePage;