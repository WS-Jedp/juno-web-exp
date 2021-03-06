import { TransitionType, TransitionBase } from './transitions'

export const AnimationLeftToRight = (transition:TransitionType = TransitionBase ) => {
    return {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: transition
        }
    }
}

export const AnimationRightToLeft = (transition:TransitionType = TransitionBase) => {
    return {
        initial: {
            x: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: transition
        }
    }
}

export const AnimationTopToBottom = (transition:TransitionType = TransitionBase) => {
    return {
        initial: {
            y: 30,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: transition
        }
    }
}

export const AnimationBottomToTop = (transition:TransitionType = TransitionBase) => {
    return {
        initial: {
            y: -30,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: transition
        }
    }
}

export const AnimationFatherContainer = (transition: TransitionType = TransitionBase) => ({
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {...transition, when: 'beforeChildren', staggerChildren: .6}
    }
})