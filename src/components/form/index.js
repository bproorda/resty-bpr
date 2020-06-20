import React from 'react';

import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: {},
      request: {},
      body: '',
    
    };
  }



async getData(request) {
  let thisUrl = this.state.url;
  let result = await fetch(thisUrl, request)
  .then(async function(Response) {
    
    let headers = [];
    let status = Response.status;
    for (var pair of Response.headers.entries()) { 
  
      headers.push(pair);
    }
    let finalAnswer = {status: status, headersJson : headers,  bodyJson :await Response.json()};
    return finalAnswer;
  });
  request.url = thisUrl;
   await this.saveToLocal(result, request);   
 
  this.props.saveData( await result); 
};

saveToLocal(result, request){
  let oldHistory = JSON.parse(window.localStorage.getItem('history')) || [];
    let newHistory = [{method: request.method, url: request.url, requestBody: request.body, response: result}, ...oldHistory];
    let newHistoryString = JSON.stringify(newHistory);
    window.localStorage.setItem('history', newHistoryString);
}

  handleSubmit = e => {
    e.preventDefault();

    if ( this.state.url && this.state.method ) {
      let request;
      // Make an object that would be suitable for superagent
      if (this.state.method !== 'get'){
        request = {method: this.state.method, body: JSON.stringify(this.state.body)};
        this.setState({body: ""});
      } else {
        request = {method: this.state.method};
      }
      this.setState({request});
      this.getData(request);
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
  // handleChangeBody =e => {
  //   let body = e.target.value;
  //   this.setState({body});
  //   console.log(this.state.body);
  // }

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
          <label className="bodyText">
            <span>Request Body: </span> 
            <textarea id="bodyText" name="bodyText"
          rows="10" cols="100" ></textarea>
          </label>
        </form>
        <section className="results">
          <span className="method">{this.state.request.method}</span>
          <span className="url">{this.state.request.url}</span>
          <span className="body">{this.state.request.body}</span>
        </section>
      </>
    );
  }
}

export default Form;
