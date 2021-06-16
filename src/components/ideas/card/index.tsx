import React from 'react'
import { defineIdeaCategoryUrl } from '../../../tools/functions/defineIdeaCategoryUrl' 

interface IdeaCardProps {
    category: string,
    title: string,
    abstract: string,
    imageUrl: string,
    link: string,
    size?: 'lg' | 'md'
}

export const IdeaCard:React.FC<IdeaCardProps> = ({ abstract, category, imageUrl, link, title, size = 'md' }) => {

    return (
        <article className={`relative flex flex-col justify-between m-xl idea-card idea-card--size-${size}`}>
            <a href={defineIdeaCategoryUrl({ category })} className="color-light font-sans font-bold idea-card__category">{category}</a>

            <a className="idea-card__content" href={link}>
                <h1 className="color-light font-sans font-bold">{title}</h1>
                <p className="color-light font-sans">{abstract}</p>
            </a>

            <a className="idea-card__action" href={link}>
                <small className="color-light font-sans">Read</small>
            </a>

            <figure className="flex flex-col align-center justify-center idea-card__figure" data-testid="idea-card__figure">
                <div className="idea-card__figure-layer"/>
                <img src={imageUrl} />
            </figure>
        </article>
    )
}