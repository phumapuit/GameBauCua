import React, { Component } from 'react'
import { connect } from 'react-redux'
class DiceList extends Component {
    render() {
        const { diceList } = this.props
        const diceArray = ['nai', 'bau', 'ga', 'ca', 'cua', 'tom']
        const diceListNew = []
        for (let i = 0; i < 3; i++) {
            diceListNew.push(diceArray[Math.floor(Math.random() * diceArray.length)])
        }
        
        return (
            <div className="mt-5" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    {Object.entries(diceList).map(([diceName, diceValue], index) => {
                        
                        return (
                            <div key={index}>
                                <img src={diceValue} alt="" style={{ width: "100px", height: "100px", marginRight: "10px" }} />
                            </div>
                        )
                    })}
                </div>
                <div>
          
                    <button className="btn btn-success" onClick={() => this.props.changeDice(diceListNew)}>XỐC</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        diceList: state.bauCuaReducer.diceList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeDice: (arrayDice) => {
            const action = {
                type: "CHANGE_DICE",
                value: arrayDice,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceList)