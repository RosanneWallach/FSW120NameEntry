import React, { Component } from 'react'
import './Entry.css'

class Entry extends Component {
    constructor() {
        super()
        this.state = {
            fullName: '',
            list: []
        }
    }

    handleEvent = (e) => {
        e.preventDefault()
        const { name, value} = e.target
        this.setState({
           [name]: value
          
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({ 
            // list: [...prevState.list, this.state.fullName]   
            list: [...this.state.list, this.state.fullName],   
            fullName: ''
        })
    }

    render() {
        const cards = this.state.list.map((item, i)  => {
            return (
                <li key={i} className='listItems'>{item}</li>
            )
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='form-container'>
                    <h1 className='title'>ADD ITEMS BELOW</h1>
                    <input 
                        type="text"
                        value={this.state.fullName}
                        name='fullName'
                        placeholder='Full Name'
                        onChange={this.handleEvent}
                    />
                    <h1>{this.state.fullName}</h1>

                    <ol className='ol-container'>
                       {cards}
                    </ol>

                    <button>Add to list</button>
                </form>
                
            </div>
        )
    }
}


export default Entry