import React, {useState, useEffect} from 'react'
import { Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getAll().then(result => setEmployers(result.data.data))
    }, [])
    return (
        <div className="class">
            <h1>Employers</h1>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Web Page</Table.HeaderCell>
                        <Table.HeaderCell>Contact</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.webAddress}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{employer.active}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

        </div>
    )
}
