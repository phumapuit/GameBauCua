import React, { Component } from 'react'
import { connect } from 'react-redux'
class bauCuaList extends Component {
    render() {
        const { animalList, total } = this.props
        return (
            <div className="text-center">
                <h1>Bầu Cua CyberSoft</h1>
                <h3 >Tổng tiền {total}</h3>
                <div className="row">
                    {animalList.map((animal, index) => {
                        return (
                            <div key={index} className="col-sm-2">
                                <img src={`baucua-img/${animal.id}.png`} alt="" />
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '5px' }} >
                                    <p className="mb-0">Cược</p>
                                    <button className="btn btn-success" onClick={() => this.props.changeNumber(animal.id, 1)}>+</button>
                                    <p className="mb-0">{animal.count * 100}</p>
                                    <button className="btn btn-danger" onClick={() => this.props.changeNumber(animal.id, -1)}>-</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        animalList: state.bauCuaReducer.animalList,
        total: state.bauCuaReducer.total
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeNumber: (itemName, number) => {
            const action = {
                type: "CHANGE_NUMBER",
                value: itemName,
                amount: number,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(bauCuaList)