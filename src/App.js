import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state = {
    contacts: {}
  }

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
      <div className="wrapper">
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

        <div class="card">
          <div class="card-body">

            <h5 class="card-title">Merchant Name:</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.contacts.username}</h6>

            <h5 class="card-title">Transaction Date:</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.contacts.timestamp}</h6>


            <h5 class="card-title">Transaction Time:</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.contacts.timestamp}</h6>

            <h5 class="card-title">Merchant Type:</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.contacts.username}</h6>

            <h5 class="card-title">Merchant Location:</h5>
            <h6 class="card-subtitle mb-2 text-muted">{this.state.contacts.id}</h6>
          </div>



        </div>
      </div>

    );
  }
}

export default App;
