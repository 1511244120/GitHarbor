import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class List extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: '',
    }
    
    componentDidMount(){
        this.token = PubSub.subscribe('startSearch', (_, stateObj) =>{
            this.setState(stateObj);
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token);
    }

  render() {
    const {users, isFirst, isLoading, err} = this.state
    return (
        <div className='row'>
            {
                isFirst ? <h2>please enter the keyword to search</h2> : 
                isLoading ? <h2>Loading...</h2> :
                err ? <h2 style={{color: 'red'}}>{err}</h2> :
                users.map((userObj) => {
                    return(
                        <div key={userObj.id} className='card'>
                            <a rel="noreferrer" href={userObj.html_url} target='blank'>
                                <img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}></img>
                            </a>
                            <p className='card-text'>{userObj.login}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
  }
}
