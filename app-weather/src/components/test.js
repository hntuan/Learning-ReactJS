import React, { Component } from 'react';

// const comments = [
//     { id: 1, name: 'Hn Tuan' , content: 'Learning ReactJs One'},
//     { id: 2, name: 'Hn' , content: 'Learning ReactJs Two'},
//     { id: 3, name: 'Tuan' , content: 'Learning ReactJs Three'},
//     { id: 4, name: 'HnTuan' , content: 'Learning ReactJs Four'},
//     { id: 5, name: 'HNT' , content: 'Learning ReactJs Five'}
// ]
class test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            comments : [
                { id: 1, name: 'Hn Tuan' , content: 'Learning ReactJs One'},
                { id: 2, name: 'Hn' , content: 'Learning ReactJs Two'},
                { id: 3, name: 'Tuan' , content: 'Learning ReactJs Three'},
                { id: 4, name: 'HnTuan' , content: 'Learning ReactJs Four'},
                { id: 5, name: 'HNT' , content: 'Learning ReactJs Five'}
            ],
        }
    }
 
    render() {
        const contents = this.state.comments.map((item) => {
            return(
                <div style={{display: 'flex'}}>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p> 
                    <p>Content: {item.content}</p>
                </div> 
            );
        });

        return (
            <div>
                {contents}
                <h1>Learning: {this.props.content}</h1>
            </div>
        );
    }
}

export default test;