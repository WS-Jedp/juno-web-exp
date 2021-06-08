export type TransitionType = {
    [key:string]: string | number
}

export const TransitionSlow:TransitionType = {
    duration: 1.5,
    ease: "easeInOut"
}
export  const TransitionBase:TransitionType = {
    duration: .9,
    ease: "easeInOut"
}
export  const TransitionFast:TransitionType = {
    duration: .6,
    ease: "easeInOut"
}