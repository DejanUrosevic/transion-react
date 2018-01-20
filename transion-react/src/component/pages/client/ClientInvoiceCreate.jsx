import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../header';
import Footer from '../../footer';
import Table from '../client/InvoiceItemTable';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

class ClientInvoiceCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {sifra: 123, proizvod: 'Mleko', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 22.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Hleb', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 1231.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Secer', jedinicaMere: 'kg', kolicina: 2, jedinicnaCena: 5111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Pivo', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 1611.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Kafa', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 1123411.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Salama', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 12111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Pasteta', jedinicaMere: 'kom', kolicina: 6, jedinicnaCena: 52463111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Sveska', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Laptop', jedinicaMere: 'kom', kolicina: 24, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'majica', jedinicaMere: 'kom', kolicina: 34, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'rokovnik', jedinicaMere: 'l', kolicina: 1, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Slika', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Registrator', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Tabla', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'racunar', jedinicaMere: 'kom', kolicina: 123, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Jedermar', jedinicaMere: 'l', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Karton cena', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Monitor', jedinicaMere: 'kom', kolicina: 5, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Hamer', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Prozor', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'Mis', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'teleforn', jedinicaMere: 'l', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33},
                {sifra: 123, proizvod: 'tastatura', jedinicaMere: 'kom', kolicina: 2, jedinicnaCena: 111.11, rabat:2.00, posleRabata:3123.22, osnovica:311.23, stopaPDV: 20, pdv:241.22, vrednostPdv:31.12, prodajnaCena:413.33}
            ]
        }
    }

    
    handleChange = event => {
        this.setState({ name: event.target.value });
    };
    
    render() {
        return(
            <div className="b2">
                <Header />
                <div className="text-center">
                    <div className="animated fadeInUp text-center">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Faktura</h3>
                            </div>
                            <br/>
                            <div className="panel-body" style={{overflow: 'auto'}}>
                                <div className="row">
                                    <div className="container">
                                        <div>
                                            <legend> <span align="center" className="label label-info">Informacije o fakturi</span> </legend>
                                            <div className="col-md-2">
                                                <FormControl className="input-border1" disabled>
                                                    <InputLabel htmlFor="name-simple">Šifra fakture</InputLabel>
                                                    <Input id="sifraFakture" onChange={this.handleChange}/>
                                                </FormControl>
                                            </div>
                                            <div className="col-md-2">
                                                <FormControl className="input-border1">
                                                    <InputLabel htmlFor="name-simple">Poslovna jedinica</InputLabel>
                                                    <Input id="poslovnaJedinica" onChange={this.handleChange}/>
                                                </FormControl>
                                            </div>
                                            <div className="col-md-2">
                                                <FormControl className="input-border1">
                                                    <InputLabel htmlFor="name-simple">Kupac</InputLabel>
                                                    <Input id="kupac" onChange={this.handleChange}/>
                                                </FormControl>
                                            </div>
                                            <div className="col-md-2">
                                                <FormControl className="input-border1">
                                                    <TextField
                                                        id="datumValute"
                                                        label="Datum valute"
                                                        type="date"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                            <div className="col-md-2">
                                                <FormControl className="input-border1">
                                                    <TextField
                                                        id="datumPlacanja"
                                                        label="Datum placanja"
                                                        type="date"
                                                        InputLabelProps={{
                                                            shrink: true
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="container">
                                        <div className="text-center">
                                            <legend> <span class="label label-success">Lista artikala</span> </legend>
                                            <div className="col-md-2">
                                                <FormControl className="input-border1" required>
                                                    <InputLabel htmlFor="name-simple">Artikal</InputLabel>
                                                    <Input id="sifraArtikla" onChange={this.handleChange}/>
                                                </FormControl>
                                            </div>
                                            <div className="col-md-2">
                                                <FormControl className="input-border1" required>
                                                    <InputLabel htmlFor="name-simple">Količina</InputLabel>
                                                    <Input id="kolicina" type="number" onChange={this.handleChange}/>
                                                </FormControl>
                                            </div>
                                            <div className="col-md-2">
                                                <FormControl className="input-border1" required>
                                                    <InputLabel htmlFor="name-simple">Rabat</InputLabel>
                                                    <Input id="rabat" type="number" onChange={this.handleChange}/>
                                                </FormControl>
                                            </div>
                                            <div className="col-md-2">
                                                <FormControl className="input-border1" required>
                                                    <InputLabel htmlFor="name-simple">Jedinična cena</InputLabel>
                                                    <Input id="jedinicnaCena" type="number" onChange={this.handleChange}/>
                                                </FormControl>
                                            </div>
                                            <div className="col-md-4" style={{marginTop: '20px'}}>
                                                <button mat-raised-button style={{backgroundColor: 'green', color: 'white'}}> 
                                                    Dodaj stavku <i className="fa fa-plus" aria-hidden="true"></i>
                                                </button>
                                                <button mat-raised-button style={{backgroundColor: 'red', color:'white'}}> 
                                                    Očisti unos <i className="fa fa-minus" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-12 table-responsive table-border">
                                    <div align="center"> <span className="label label-primary">Dodate stavke</span> </div>
                                        <br/>
                                        <Table
                                            data={this.state.data}
                                        />
                                        <div className="sumTable">
                                            <u> Ukupno</u>: <span style={{color: 'blue'}}> 123.11</span>
                                            <u> PDV</u>: <span style={{color: 'lightseagreen'}}> 1231.00 </span> 
                                            <u> Za plaćanje</u>: <span style={{color: 'red'}}> 312.32 </span>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(null, {})(ClientInvoiceCreate));
