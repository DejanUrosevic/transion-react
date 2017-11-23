import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ClientPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            letters: []
        }
        this.convertLetters = this.convertLetters.bind(this);
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
                                <div className="row" styles="{{padding-left: '80px;'}}">
                                {
                                    this.state.letters.map(function(letter){
                                        return(
                                            <div key={letter} 
                                                 className="col-sm-1 col-md-1 col-lg-1 letters" 
                                                 styles="{{overflow: 'hidden;'}}">	
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
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 animated fadeInUp">
                                <hr className="style13 animated fadeInDown"/>
                            </div>
                        </div>
                    
                        <div className="col-md-4 col-md-offset-4 animated fadeInUp">
                        <div className="panel panel-info">
                            <div className="panel-heading text-center">
                                <h3 className="panel-title">Clients</h3>
                        </div>
                            <br/>

                            <div align="center" className="alert alert-info animated fadeInDown">There are no clients.</div>

                            <div className="row animated fadeInUp">
                            <div className="col-md-12 col-xs-12 col-sm-12" styles="{{overflow:'hidden;'}}">	
                                <table className="table table-hover">
                                <tbody>
                                    {/*<tr *ngFor="let agency of agencies; let i = index;" (click)="showOptions(agency, i)" [ngClass]="{'trActive': i == selectedRowClient}">
                                    <td>
                                        <h3> {{agency.name}} </h3>
                                        <p> <i> {{agency.email}} </i> </p>
                                        <p> <i> {{agency.telephone}} </i> </p>
                                    </td>
                            </tr>*/}
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
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

}

export default withRouter(connect(null, {})(ClientPage))