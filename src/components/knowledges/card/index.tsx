import React from 'react'

interface KnowledgeCard {
    img: string,
    knowledge: string,
    time: string
}

export const KnowledgeCard:React.FC<KnowledgeCard> = ({ img, knowledge, time }) => {

    return (
        <article className="relative flex flex-col align-start justify-between knowledge-card">
            <figure className="knowledge-card__icon">
                <img src={img} />
            </figure>
            <div className="relative flex flex-col align-end justify-start w-100 knowledge-card__title">
                <h1 className="text-end">{knowledge}</h1>
                <p className="font-serif text-end">{time}</p>
            </div>
        </article>
    )
}