import React, { Component } from 'react';
import Header from '../../header';
import Footer from '../../footer';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectClientsOnLetter } from '../../../action/action';

class ClientPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            letters: [],
            clients: [],
            selectedRow: -1,
            lettersContainer: {paddingLeft: '80px', paddingRight: '80px'},
            letterCss:{overflow: 'hidden'}
        }
        this.convertLetters = this.convertLetters.bind(this);
        this.selectAgencies = this.selectAgencies.bind(this);
    }

    componentDidMount() {
        this.convertLetters();
    }

    convertLetters(){
        var letters = this.state.letters;
        for(var i = 65; i < 91; i++){
            letters.push(String.fromCharCode(i));
        }

        this.setState({letters : letters});
    }

    selectAgencies(selectedRow, selectedLetter){
        this.setState({selectedRow: selectedRow});
        this.props.selectClientsOnLetter(selectedLetter)
            .then((response) => {
                this.setState({clients: response})
            })
    }

    render(){
        return(
            <div className = "b2">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 animated fadeInUp">
                            <div className="panel panel-info">
                                <div className="panel-heading text-center">
                                        <h3 className="panel-title">Find</h3>
                                </div>
                                <div className="panel-body">
                                    <div className="row" style={this.state.lettersContainer}>
                                    {
                                        this.state.letters.map((letter, i) => {
                                            return(
                                                <div key={i} 
                                                    className={`col-sm-1 col-md-1 col-lg-1 letters ${i===this.state.selectedRow ? 'clicked': ''}`}
                                                    style={this.state.letterCss}
                                                    onClick={() => this.selectAgencies(i, letter)}>	
                                                    &nbsp;&nbsp;<h2> {letter} </h2>    
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <br/>
                    {this.state.selectedRow !== -1 && 
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 animated fadeInUp">
                                <hr className="style13 animated fadeInDown"/>
                            </div>
                        </div>
                    }
                    {this.state.selectedRow !== -1 && 
                        <div className="col-md-4 col-md-offset-4 animated fadeInUp">
                            <div className="panel panel-info">
                                <div className="panel-heading text-center">
                                    <h3 className="panel-title">Clients</h3>
                                </div>
                                <br/>

                                {this.state.clients.length === 0 &&
                                    <div align="center" className="alert alert-info animated fadeInDown">There are no clients.</div>

                                }

                                <div className="row animated fadeInUp">
                                    <div className="col-md-12 col-xs-12 col-sm-12" styles="{{overflow:'hidden;'}}">	
                                        <table className="table table-hover">
                                            <tbody>
                                                {
                                                    this.state.clients.map((client, i ) => {
                                                        return (
                                                            <div key= {i}>
                                                                <tr >
                                                                    <td>
                                                                        <h3> {client.name} </h3>
                                                                        <p> <i> {client.email} </i> </p>
                                                                        <p> <i> {client.telephone} </i> </p>
                                                                    </td>
                                                                </tr>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
                    <div className="col-md-3 animated fadeInUp" align="center" >
                        <p>
                        {/*<a (click)="mails()" class="btn btn-red">Mails</a>
                        <a (click)="viewDetails()" class="btn btn-blue">Transactions</a>*/}</p>	
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

ClientPage.PropTypes = {
    selectClientsOnLetter: PropTypes.func.isRequired
}

export default withRouter(connect(null, { selectClientsOnLetter })(ClientPage))