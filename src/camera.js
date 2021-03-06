import react from 'react';
import ReactDOM from 'react-dom';
import QrReader from 'react-qr-reader';

class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 300,
      result: 'No result',
    }
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    if(data){
      this.setState({
        result: data,
      })
    }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    return(
      <div>
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
          />
        <h1>Kohdista kamera</h1>
        <p>test</p>
      </div>
    )
  }
}
ReactDOM.render(<Test/>, document.getElementById("root"));