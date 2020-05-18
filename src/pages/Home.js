import React from 'react'
import {
     CardDeck,
  } from 'reactstrap';
import {
    One,
    Builder,
    Dog
} from "../assets/images"
import Cards from "./Cards"

const Home = () => {
    return(
        <div>
            <section className="p-3">
            <CardDeck>
                <Cards src={One} title="One"/>
                <Cards src={Builder} title="Two"/>
                <Cards src={Dog} title="Three"/>
            </CardDeck>
            </section>
        </div>
    )
}

export default Home