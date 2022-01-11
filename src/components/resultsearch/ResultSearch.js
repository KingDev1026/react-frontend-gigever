import React, {useState} from "react";
import './ResultSearch.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import Autocomplete from "react-autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import {BsSearch} from "react-icons/bs";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import moment from 'moment';

function ResultSearch () {
    const [value, setValue] = useState('Berlin')
    const [date, setDate] = useState(new Date())
    const [time1, setTime1] = useState()
    const [time2, setTime2] = useState()
    const [combo1, setCombo1] = useState()
    const [combo2, setCombo2] = useState()
    const options = [
        'one', 'two', 'three'
      ];
    return(
        <div className="ResultSearch">
            <Container>
                <Row>
                    <Col lg={2} sm={4}><div className="Result-Title">Change search:</div></Col>
                    <Col lg={1} sm={4}>
                        <Autocomplete
                            className="City"
                            getItemValue={(item) => item.label}
                            items={[
                                { label: 'Berlin' },
                            ]}
                            renderItem={(item, isHighlighted) =>
                                <div style={{ color:"black", background: isHighlighted ? 'lightgray' : 'white'}}>
                                    {item.label}
                                </div>
                            }
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            onSelect={(val) => setValue(val)}
                        />
                    </Col>
                    <Col lg={2} sm={4}>
                        <DatePicker
                            className="Date Width"
                            selected={date}
                            onSelect={(e) => {setDate(e)}} //when day is clicked
                            onChange={(e) => setDate(e)} //only when value has changed
                        />
                    </Col>
                    <Col lg={1} sm={4}>
                        <TimePicker
                            className="Time1 Width"
                            format="HH-mm"
                            defaultValue={moment()}
                            // inputIcon={<BsFillArrowDownCircleFill />}
                            onChange={(e) => {
                                console.log(e._d)
                            }}
                        />
                    </Col>
                    <Col lg={1} sm={4}>
                        <TimePicker
                            className="Time2 Width"
                            format="HH-mm"
                            defaultValue={moment()}
                            // inputIcon={<BsFillArrowDownCircleFill />}
                            onChange={(e) => console.log(e)}
                        />
                    </Col>
                    <Col lg={2} sm={4}><Dropdown classname="Combo1 Width" options={options} onChange={(e) => setCombo1(e.value)}  placeholder="Select" /></Col>
                    <Col lg={2} sm={4}><Dropdown classname="Combo2 Width" options={options} onChange={(e) => setCombo2(e.value)}  placeholder="Select" /></Col>
                    <Col lg={1} sm={4} className="Icon"><BsSearch /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResultSearch;