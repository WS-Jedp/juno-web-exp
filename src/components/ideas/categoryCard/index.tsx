import React from 'react'

interface IdeaCategoryCardProps {
    title: string,
    abstract: string,
    color?: 'purple' | 'main' | 'light-blue',
    link: string
}

export const IdeaCategoryCard:React.FC<IdeaCategoryCardProps> = ({ title, abstract, color = "main", link }) => {

    return (
        <a href={link} className={`flex flex-col align-start m-md justify-center idea-category-card idea-category-card--color-${color}`}>
            <h2 className="font-sans font-bold">
                {title}
            </h2>
            <p className="font-sans">
                {abstract}
            </p>
        </a>
    )
}