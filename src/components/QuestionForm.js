//METHODE 1

// function handleSubmit(e) {
//    e.preventDefault() //empeche l'actualisation de la page
//     alert(e.target['my_input'].value)
// }
//
//
// function QuestionForm({ id, cover, name, water, light }) {
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type='text' name='my_input' defaultValue='Tapez votre texte'/>
//             <button type='submit'>Entrer</button>
//         </form>
//     )
// }
//
// export default QuestionForm



//METHODE 2

import { useState } from 'react'



function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')

    const isInputError = inputValue.includes('f')

    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }

    return (
        <div>
            {isInputError && (
                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )}
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                //onChange={(e) => checkValue(e.target.value)} rend impossible de taper la lettre f
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>

        </div>
    )
}

export default QuestionForm