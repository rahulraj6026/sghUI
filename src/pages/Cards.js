import React from 'react'
import {
    Card, 
    Button, 
    CardImg,
     CardTitle, 
     CardText,
     CardBody
} from 'reactstrap';

const Cards = ({src, title}) => {
    return(
        <Card>
            <CardImg height={281} width={160} src={src} alt="Card image cap" />
            <CardBody className="text-justify font-weight-normal text-muted">
                <CardTitle><b>House {title}</b></CardTitle>
                <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    )
}

export default Cards