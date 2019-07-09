import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <div>
                {/* <img src='https://cdn.shopify.com/s/files/1/1762/3533/files/92a94ee369dcffc4eba56bb7e15e2952_large.jpg?v=1488827731' /> */}
                <img src={this.props.myImage} />
                <caption>Cat Meme</caption>
            </div>
        )
    }
}