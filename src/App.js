import React, { Component } from 'react';
import $ from 'jquery';
import Header from './components/Header';
import About from './components/About';
import Works from './components/Works';
import Footer from './components/Footer';
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          foo: 'bar',
          resumeData: {}
        };
      }
    
  getResumeData(){
    $.ajax({
      url:'./Data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }
    
    render() { 
        return ( 
            <>
                <div className="App">
                    <Header data={this.state.resumeData.main}/>
                    <About/>
                    <Works/>
                    <Footer/>
                </div>
            </>
         );
    }
}
 
export default App;