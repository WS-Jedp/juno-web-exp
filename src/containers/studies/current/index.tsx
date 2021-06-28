import React from 'react'
import { CurrentStudyWithStudy } from '../../../pages/studies'
import { StudyCard } from '../../../components/studies/card'
import { StudyProgress } from '../../../components/studies/progress'
import { Content } from '../../../components/content'

interface CurrentStudyContainer {
    position?: 'start' | 'center' | 'end',
    color?: 'primary' | 'secondary',
    currentStudy: CurrentStudyWithStudy
}

export const CurrentStudyContainer:React.FC<CurrentStudyContainer> = ({ position = 'start', color = 'secondary', currentStudy }) => {

    if(!currentStudy || !currentStudy.study) {
        return null
    }

    const { study, progress } = currentStudy

    return (
        <section className={`bg-${color} current-study-container`}>
            <Content
                position={position}
                color={color === 'primary' ? 'black' : 'white'}
                size="mid"
            >

                <h2 className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>Current Learning</h2>
                <p className={`color-${color === 'primary' ? 'secondary' : 'primary'}`}>Discover the new skills and knowledge that Juno has been learning and how they can help make dreams come true.</p>
            </Content>

            <article className="flex current-study-container__current">
                <div className="current-study-container__current--card">

                    <StudyCard 
                        pilar={study.pilar}
                        description={study.description}
                        title={study.name}
                        purposes={[]}
                        color={color === 'primary' ? 'secondary' : 'primary'}
                    />
                </div>
                <div className="current-study-container__current--progress">
                    <StudyProgress 
                        celestialBodyName={study.name}
                        junoPosition={progress}
                        color={color === 'primary' ? 'white' : 'black'}
                    />
                </div>
            </article>
        </section>
    )
}