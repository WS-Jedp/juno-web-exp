import React from 'react'

interface StoryCardProps {
    title: string,
    category: string,
    imageUrl: string,
    link: string
    size?: 'lg' | 'md',
    color?: 'primary' | 'secondary'
}

export const StoryCard:React.FC<StoryCardProps> = ({ title, category, imageUrl, link, size = "md", color = 'primary' }) => {
    
    return (
        <article className={`relative flex flex-col m-xl story-card story-card--size-${size}`}>
            <a href={link} className="relative story-card__figure" data-testid="story-card__figure">                
                <figure>
                    <img src={imageUrl} />
                </figure>
            </a>

            <a href={link} className="story-card__content">
                <b className={`color-${color} font-sans`}>{category}</b>
                <h2 className={`color-${color} font-sans`}>{title}</h2>
            </a>
        </article>
    )
}