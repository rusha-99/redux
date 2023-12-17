import React from 'react'
import { fetchPosts } from '../actions/postActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const ButtonComponent = () => {
  return (
      <div>
        <button onClick={()=>this.props.fetchPosts()}>Fetch Posts</button>
    </div>
  )
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts :fetchPosts }, dispatch)
}

export default connect(null, matchDispatchToProps)(ButtonComponent)