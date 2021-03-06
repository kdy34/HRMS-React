import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import CandidateService from '../services/candidateService';


export default function CandidateList() {

    const [candidates, setCandidates] = useState([])

    useEffect(()=>{
        let candidateService = new CandidateService();
        candidateService.getAll().then(result => setCandidates(result.data.data))
      }, [])

    return (
        <div>
            <h1>Candidates</h1>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Surname</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>BirthYear</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map(candidate => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.email}</Table.Cell>
                                <Table.Cell>{candidate.birthYear}</Table.Cell>
                                <Table.Cell>{candidate.active}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
