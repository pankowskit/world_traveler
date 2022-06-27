import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ToursS1 from "../components/tours-s1";

class Tours extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ToursS1/>
            </Container>    
        );
    }
}

export default Tours;