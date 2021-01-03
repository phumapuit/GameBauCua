const initialState = {
    animalList: [
        {
            id: "nai",
            count: 0
        },
        {
            id: "bau",
            count: 0
        },
        {
            id: "ga",
            count: 0
        },
        {
            id: "ca",
            count: 0
        },
        {
            id: "cua",
            count: 0
        },
        {
            id: "tom",
            count: 0
        }
    ],
    total: 500,
    diceList: {
        diceOne: "baucua-img/nai.png",
        diceTwo: "baucua-img/bau.png",
        diceThree: "baucua-img/ga.png",
    }
}
const bauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_NUMBER": {
            const animalList = [...state.animalList]
            animalList.map((animal, index) => {
                if (animal.id === action.value) {
                    if ((action.amount === -1 && animal.count < 1) || (action.amount === 1 && state.total === 0))
                        return state
                    if (state.total >= 0) {
                        animal.count += action.amount
                        state.total = state.total - action.amount * 100
                    }
                }
            })
            return { ...state, animalList }
        }
        case "CHANGE_DICE": {
            const diceList = { ...state.diceList }
            const animalList = [...state.animalList]
            const diceArray = action.value

            // tính tiền
            let viTri = 0
            for (let i in diceArray) {
                for (let j in animalList) {
                    // tiền thưởng
                    if (diceArray[i] === animalList[j].id) {
                        
                        state.total += animalList[j].count * 100
                        
                        // tiền gốc, nếu xúc sắc trùng thì chỉ trả 1 lần
                        if ((diceArray[i] !== diceArray[viTri + 1]) && (diceArray[i] !== diceArray[viTri + 2])) {
                            
                            state.total += animalList[j].count * 100
                            
                        }
                        
                        break
                    }
                }
                viTri += 1
            }

            // reset lại số lần cược
            for (let i in animalList) {
                animalList[i].count = 0
            }
            
            // trả về giá trị sau khi roll
            diceList.diceOne = `baucua-img/${diceArray[0]}.png`
            diceList.diceTwo = `baucua-img/${diceArray[1]}.png`
            diceList.diceThree = `baucua-img/${diceArray[2]}.png`
            
            return { ...state, diceList, animalList }

        }
        default:
            return state
    }
}

export default bauCuaReducer;