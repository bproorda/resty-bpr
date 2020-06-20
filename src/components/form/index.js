import React from 'react';

import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: {},
      request: {},
      body: {},
    
    };
  }



async getData() {
  let requestObj;
  if (this.body){
    requestObj = {method: this.state.method};
  }
  let result = await fetch(this.state.url, requestObj)
  .then(async function(Response) {
    
    let headers = [];
    let status = Response.status;
    for (var pair of Response.headers.entries()) { 
  
      headers.push(pair);
    }
    let finalAnswer = {status: status, headersJson : headers,  bodyJson :await Response.json()};
    return finalAnswer;
  });
 
  let oldHistory = JSON.parse(window.localStorage.getItem(window.localStorage.getItem('history'))) || [];
    let newHistory = [{method: this.state.method, response: result}, ...oldHistory];
    let newHistoryString = JSON.stringify(newHistory);
    window.localStorage.setItem('history', newHistoryString);

    
 
  this.props.saveData( await result); 
};



  handleSubmit = e => {
    e.preventDefault();

    if ( this.state.url && this.state.method ) {

      // Make an object that would be suitable for superagent
      let request = {
        url: this.state.url,
        method: this.state.method,
      };
      this.getData();
      // Clear old settings
      let url = '';
      let method = '';

      this.setState({request, url, method});
      e.target.reset();

    }

    else {
      alert('missing information');
    }
  }

  handleChangeURL = e => {
    const url = e.target.value;
    this.setState({url});
  };

  handleChangeMethod = e => {
    const method = e.target.id;
    this.setState({ method });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} />
            <button type="submit">GO!</button>
          </label>
          <p>Test URL for GET: https://official-joke-api.appspot.com/jokes/programming/ten</p>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
        <section className="results">
          <span className="method">{this.state.request.method}</span>
          <span className="url">{this.state.request.url}</span>
        </section>
      </>
    );
  }
}

export default Form;
