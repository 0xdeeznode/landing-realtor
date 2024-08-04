import { Bona_Nova, Cormorant_Garamond, Roboto_Condensed } from 'next/font/google'


const bona_init = Bona_Nova({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-bona',
})

const cormorant_init = Cormorant_Garamond({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-cormorant',
})

const roboto_init = Roboto_Condensed({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-roboto',
})


export const bona = bona_init.variable;
export const cormorant = cormorant_init.variable;
export const roboto = roboto_init.variable;