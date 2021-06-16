import React from 'react'

interface StoryCardProps {
    title: string,
    category: string,
    imageUrl: string,
    link: string
    size?: 'lg' | 'md'
}

export const StoryCard:React.FC<StoryCardProps> = ({ title, category, imageUrl, link, size = "md" }) => {
    
    return (
        <article className={`relative flex flex-col m-lg story-card story-card--size-${size}`}>
            <a href={link} className="relative story-card__figure" data-testid="story-card__figure">                
                <figure>
                    <img src={imageUrl} />
                </figure>
            </a>

            <a href={link} className="story-card__content">
                <b className="font-sans">{category}</b>
                <h2 className="font-sans">{title}</h2>
            </a>
        </article>
    )
}