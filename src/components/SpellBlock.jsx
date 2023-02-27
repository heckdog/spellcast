import React from "react";

const SpellBlock = ({ spell }) => {

    return (
        <div className='spell' key={spell.index}>
            <h2 className="spell-name">{spell.name} (Level&#160;{spell.level})</h2>
            <p className="spell-school">School of {spell.school.name}</p>
            <section className="spell-header">
                    <span><strong>Casting Time: </strong>{spell.casting_time}</span>
                    <span><strong>Duration:</strong> {spell.duration}</span>
                    <span><strong>Concentration: </strong> {spell.concentration ? "✔️" : "❌"}</span>
                    <span><strong>Range: </strong>{spell.range}</span>
                    <span><strong>Components: </strong>{spell.components}</span>
                    {
                    (spell.material) ? 
                        <span><strong>Material: </strong>{spell.material}</span>
                    : 
                        <></>
                    }
            </section>

            <section className="spell-body">
                <h3>Description:</h3>
                {spell.desc.map((d, idx) => (
                    <p key={idx}>{d}</p>
                ))}
                {
                    spell.higher_level.length ?
                    <>
                        <br />
                        <h3>At Higher Levels:</h3>
                        {spell.higher_level.map((d, idx) => (
                            <p key={idx}>{d}</p>
                        ))}
                    </>
                    :
                    <></>
                }
                <br />
                <span><strong>Classes: </strong>{spell.classes.slice(0, -1).map((c, i) => (
                    c.name + ", "
                    ))}
                    {spell.classes.slice(-1)[0].name /* Stupid way to get last element of array. */} 
                </span>
                <br />
                <p className="spell-source">Source: D&D 5e Player's Handbook</p>
                <br />
                
            </section>
            
        </div>
    )
}


export default SpellBlock; 