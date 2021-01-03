import React, { Component } from 'react'
import BauCuaList from './bauCuaList'
import DiceList from './DiceList'
export default class BauCua extends Component {
    render() {
        return (
            <div>
                <div>
                    <BauCuaList />
                    <DiceList />
                </div>
            </div>
        )
    }
}
