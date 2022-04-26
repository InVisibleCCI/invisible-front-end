import React, { useEffect, useState } from "react";
import { RegularOpening } from '../../../classes/RegularOpening';

interface Props {
    openings: RegularOpening[]
}

const DAYS = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

export const Openings = ({ openings }: Props) => {
    const [sortedOpenings, setSortedOpenings] = useState<any[]>();

    useEffect(() => {
        let result: any = []
        DAYS.map((day, index) => {
            let test = openings.filter(a => a.day == index + 1)
            result.push({ [day]: test })
        })
        setSortedOpenings(result)
    }, [])

    const displaySlot = (slots: RegularOpening[]) => {
        return slots.map((slot, index) =>  <span>{slot.start_at}-{slot.end_at} 
            {index !== slots.length-1 && <br/>} </span>)
    }

    return <div>
        {
            sortedOpenings && sortedOpenings.map(openings => {
                let day = Object.keys(openings)[0]
                return <p> <b> {day} : </b> {openings[day].length !== 0 ? 
                    displaySlot(openings[day])
                : "Fermé "
                } </p>
            })
        }

    </div>

}