import { LocationCardProps } from '../../../components/location/card'
import { Location } from '../../../components/location/orbit'

type LocationOptions = {
    locationOption: Location
    contents: LocationCardProps[]
}



export const locationsOptions = (action: (title:string) => void):LocationOptions[] => {
    return [
        {
            locationOption: {
                title: 'Home',
                action: action,
                link: '/'
            },
            contents: [
                {title: 'Introduction', link: '/introduction', abstract: 'Know the fundamentals of Juno'},
            ]
        },
        {
            locationOption: {
                title: 'Studio',
                action: action,
                link: '/studio'
            },
            contents: [
                {title: 'Projects', link: '/projects', abstract: 'Know all the projects of Juno'},
                {title: 'Allies', link: '/allies', abstract: 'Meet the angels'}
            ]
        },
        {
            locationOption: {
                title: 'About',
                action: action,
                link: '/about'
            },
            contents: [
                {title: 'Juno', link: '/about', abstract: 'Know more about Juno'},
                {title: 'Studies', link: '/studies', abstract: 'Know more about technical'}
            ]
        },
        {
            locationOption: {
                title: 'State',
                action: action,
                link: '/about'
            },
            contents: [
                {title: 'Articles', link: '/articles', abstract: 'Know more about Juno'},
                {title: 'Essays', link: '/essays', abstract: 'Know more about technical'}
            ]
        }
    ]
}
