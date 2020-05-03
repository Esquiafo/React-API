import React, { Component } from 'react';
import List from '../components/List'
import axios from 'axios'


class ListContainer extends Component {
    state = {
        Data: []
    }
  
    componentDidMount() {
      axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(res => {
           
          const Data = res.data;
          this.setState({ Data });
        })
    }
  
    render() {
        const {Data} = this.state;
        return(
            <List data={Data} />
        );
    }
  }
export default ListContainer