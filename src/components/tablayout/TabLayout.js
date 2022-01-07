import React from "react";
import './TabLayout.css';
import { Tabs, Tab, Container } from "react-bootstrap";
import {FaMusic} from "react-icons/fa";
import {FaRegDotCircle} from "react-icons/fa";
import {FaRegGrin} from "react-icons/fa";
import TabContent from "./tabcontent/TabContent";


function TabLayout () {
    return(
        <div className="TabLayout">
            <Container>
                <Tabs defaultActiveKey="musicians" id="uncontrolled-tab-example">
                    <Tab eventKey="musicians" title={<span><FaMusic className="tab-icon" />  Musicians </span>}>
                        <TabContent />
                    </Tab>
                    <Tab eventKey="dj" title={<span><FaRegDotCircle className="tab-icon" />  DJ </span>}>
                        <TabContent />
                    </Tab>
                    <Tab eventKey="comedian" title={<span><FaRegGrin className="tab-icon" />  Comedian </span>}>
                        <TabContent />
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default TabLayout;