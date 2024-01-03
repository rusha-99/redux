import React from 'react'
import {connect} from "react-redux";
import {buyCake, returnCake} from "../redux";

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <button onClick={props.returnCake}>Return Cake</button>
        </div>
    )
}

const mapStateToProps = (state) => { //get redux state as a parameter
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {//get dispatch method as a parameter
    return {
        buyCake: () => dispatch(buyCake()),
        returnCake: () => dispatch(returnCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)//connect react component to redux store