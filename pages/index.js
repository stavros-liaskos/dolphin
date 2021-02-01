import React, {Fragment} from 'react'
import { client } from '../prismic-configuration'
import { RichText } from 'prismic-reactjs'
import { Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogHome = ({ home }) => {
    return (
        <Fragment>
            <div style={{height: "226px", width: "311px", backgroundImage: "url(./wave.png)", backgroundSize: "cover", position:"fixed"}}/>
            <Container>
                <br/>
                <br/>
                <h1 style={{textAlign: "center"}}>{RichText.asText(home.data.headline)}</h1>
                <br/>
                <br/>
                <p style={{textAlign: "center", fontStyle:"italic"}}>{RichText.asText(home.data.description)}</p>
                <br/>
                <br/>

                {RichText.render(home.data.post_body)}
                <Row>

                <img src="./waves.png" alt="waves" style={{maxWidth: "100%"}} loading="lazy"/>
                </Row>
            </Container>
        </Fragment>
    )
}

export async function getServerSideProps() {
    const home = await client.getSingle('blog_home')

    return { props: { home} }
}

export default BlogHome