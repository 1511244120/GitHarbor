import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = () => {
        const {keyWordElement:{value:keyWord}} = this
        PubSub.publish('startSearch', {isFirst: false, isLoading: true})
        //this.props.updateAppState({isFirst: false, isLoading: true});
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                // this.props.updateAppState({isLoading:false, users: response.data.items});
                PubSub.publish('startSearch',{isLoading:false, users: response.data.items})
            },
            error => {
                // this.props.updateAppState({isLoading:false, err: error.message});
                PubSub.publish('startSearch',{isLoading:false, err: error.message})
            }
        )
    }

    render() {
    
    return (
        <section className='jumbotron'>
            <h3 className='jumbotron-heading'>Search Github Users</h3>
            <div>
                <input ref={c => this.keyWordElement = c} type='text' placeholder="enter the name you search"></input>&nbsp;
                <button onClick={this.search}>Search</button>
            </div>
      </section>
    )
  }
}
