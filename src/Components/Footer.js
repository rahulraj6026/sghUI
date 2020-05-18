import React from 'react'
import { Container } from 'reactstrap'


const Footer = () => {
    return(
        <Container
        fluid
        tag="footer"
        className="text-center text-muted text-uppercase fixed-bottom py-2 mt-auto bg-dark"
        style={{backgroundColor:"transparent"}}
        >
            Copyrights © 2020. Shankar Green Homes.
        </Container>
    )
}

export default Footer
