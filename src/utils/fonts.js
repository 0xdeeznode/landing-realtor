import { Bona_Nova, Titillium_Web, Roboto_Slab } from 'next/font/google'


const bona_init = Bona_Nova({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-bona',
})

const titillium_init = Titillium_Web({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-titillium',
})

const robotoslab_init = Roboto_Slab({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-robotoslab',
})


export const bona = bona_init.variable;
export const titillium = titillium_init.variable;
export const robotoslab = robotoslab_init.variable;