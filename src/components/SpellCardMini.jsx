import React from "react";

const SpellCardMini = ({ spell, onClick }) => {

    return (
        <div className='spell-mini' key={spell.index} onClick={() => onClick(spell.index)}>

            <div>
                <h3>{spell.name}</h3>
            </div>
        </div>
    )
}


export default SpellCardMini; 