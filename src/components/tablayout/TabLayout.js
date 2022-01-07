import React from "react";
import './TabLayout.css';
import { Tabs, Tab, Container } from "react-bootstrap";
import {FaMusic} from "react-icons/fa";
import {FaRegDotCircle} from "react-icons/fa";
import {FaRegGrin} from "react-icons/fa";


function TabLayout () {
    return(
        <Container>
            <div className="TabLayout">
                <Tabs defaultActiveKey="musicians" id="uncontrolled-tab-example">
                    <Tab eventKey="musicians" title={<span><FaMusic className="tab-icon" />  Musicians </span>}>
                    asdfasdfasdfasfafsdfasfdasdfasdfasdfasfafsdfasfdasdfasdfasdfasfafsdfasfd
                    </Tab>
                    <Tab eventKey="dj" title={<span><FaRegDotCircle className="tab-icon" />  DJ </span>}>
                    </Tab>
                    <Tab eventKey="comedian" title={<span><FaRegGrin className="tab-icon" />  Comedian </span>}>
                    </Tab>
                </Tabs>
            </div>
        </Container>
    )
}

export default TabLayout;