import React, {useEffect, useState} from 'react'
import { Content } from '../../content'

export interface ProcessCardProps {
    title: string,
    abstract: string,
    description: string,
    purposes: string[],
    color?: 'white' | 'black',
}

export const ProcessCard:React.FC<ProcessCardProps> = ({ title, description, abstract, purposes, color = 'white',}) => {

    const [show, setShow] = useState<boolean>(false)

    return (
        <article className={`m-md process-card process-card--color-${color} ${show ? 'process-card--detail' : ''}`} onClick={() => setShow(!show)} data-testid="process-card-container">
            <Content
                color={color}
            >
                <h3 className="font-sans"> {title} </h3>
                <div className="process-card__paragraphs">
                    {
                        !show ? (
                            <p className="font-sans p-b-md p-t-md"> {abstract} </p>
                        ) : (
                            <p className="font-sans p-b-md p-t-md process-card__description"> {description} </p>
                        )
                    }
                </div>

                {
                    show && (
                        <div className="process-card__purposes">
                            <h4 className="font-sans p-t-md">Purposes</h4>
                            <ul className="process-card__list">
                               {
                                   purposes.map((purpose, i) => (
                                       <li key={i} className="font-sans font-thin"><span className="process-card__list-circle" />{purpose}</li>
                                   ))
                               } 
                            </ul>
                        </div>
                    )
                }
            </Content>
            <span className={`text-size-base-md font-sans font-bold color-${color == 'white' ? 'secondary' : 'primary'}`}>{show ? 'See Less' : 'See More'}</span>
        </article>
    )
}
