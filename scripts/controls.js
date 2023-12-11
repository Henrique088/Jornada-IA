export default {
    jump: new KeyboardEvent('keydown', {key: 'space', keyCode:32}),
    crounch: new KeyboardEvent('Keydown',{key: 'Arrowdown', keyCode: 
40}),
    dispatch(event){
        document.dispatchEvent(this[event]);
    }
}

