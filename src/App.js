import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
  state = {
    contacts: {}
  }

  defaultProps = {
    center: {
    lat: 10.99835602,
    lng: 77.01502627
    },
    zoom: 11
  }

  AnyReactComponent = ({ text }) => <div>{text}</div>


componentDidMount() {
  fetch('http://localhost:8895/v0.1/transactions/hw?id=2151060662&amount=8523.0&transaction_date=2022-05-09&card_last4=7580')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    this.setState({ contacts: data })
  })
  .catch(console.log)
}


  render() {
    return (

      <div class="split left">
      <div class="centered">
        <h1>Transaction Search</h1>
        <form>
        <fieldset>
          <label>
              <p>Transaction Id:</p>
            <input type="text" name="id" />
          </label>
          </fieldset>
          <fieldset>
          <label>
            <p>Transaction Data:</p>
            <input type="text" name="transaction_date" />
          </label>
          </fieldset>

          <fieldset>
          <label>
            <p>Amount:</p>
            <input type="text" name="amount" />
          </label>
          </fieldset>

          <fieldset>
          <label>
            <p>Card last 4:</p>
            <input type="text" name="card_last4" />
          </label>
          </fieldset>
         <button type="submit">Submit</button>
        </form>
        <div className="dataloader">
          <p>{this.state.contacts.name}</p>
        </div>
        </div>

        <div class="split right">
          <div class="centered">

            <h5 class="">Merchant Name:</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.contacts.username}</h6>

            <h5 class="">Transaction Date:</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.contacts.timestamp}</h6>


            <h5 class="">Transaction Time:</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.contacts.timestamp}</h6>

            <h5 class="">Merchant Type:</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.contacts.username}</h6>

            <h5 class="">Merchant Location:</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.contacts.id}</h6>


            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={this.defaultProps.center}
                defaultZoom={this.defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>



    );
  }
}

export default App;
