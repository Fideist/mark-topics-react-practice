import React, { Component } from 'react';

class Topic extends Component {
  render () {
    const styles = this.styles();

    return (
      <div style={styles.component}>
        <h2>{this.props.topicName}</h2>
        <div>{this.props.percentage}</div>
        <img style={styles.image} src={this.props.topicImage} />
      </div>
    )
  }

  styles = () => {
    return {
      image: {
        width: '400px'
      },
      component: {
        padding: '20px',
        border: '1px solid blue',
        margin: '0px 100px'
      }
    }
  }
}

export default Topic;
