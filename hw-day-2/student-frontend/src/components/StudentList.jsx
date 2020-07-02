import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            loading: true,
            error: false,
        };
    }

    fetchdata = async () => {
        const response = await fetch("http://localhost:3001/students/ ")

        if (response.ok) {
            const students = await response.json()
            this.setState({
                studentList: students
            });
        } else {
            alert("Something went wrong!")
        }
    }

    componentDidMount = () => {
        this.fetchdata()


    }
    render() {
        return (
            <Table
                students={this.state.students}
                fetchStudentData={this.fetchStudentData}
                deleteStudent={this.deleteStudent}
            />

            // <Container className="d-flex justify-content-center">

            //     <Table
            //         
            //         fetchStudentData={this.fetchStudentData}
            //         deleteStudent={this.deleteStudent}
            //     />
            // </Container >

        )
    }
}
