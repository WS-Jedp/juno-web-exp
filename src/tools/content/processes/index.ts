import { ProcessCardProps } from '../../../components/process/card'

type Processes = {
    [key: string]: ProcessCardProps
}

export const Processes:Processes = {
    storytelling: {
        title: 'Storytelling',
        abstract: 'The best stories are the ones that know what they want to transmit.',
        description: 'The best stories are the ones that know what they want to transmit. Essentially the first stage is knowing the vision and purpose of the project and their creators deeply, so together we can create the story that represents the ideals and vision of the story and as result there is a full coherent language that transmits the ideas and dreams of the project with the major fidelity possible.',
        purposes: [
            'Naming',
            'Visual Language',
            'Story',
            'Personality',
            'Web Experience'
        ]
    }
}