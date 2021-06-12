import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        let jobPostings = new JobPostingService();
        jobPostings.getJobPostings().then(result => setJobPostings(result.data.data))
        jobPostings.add().then(result => setJobPostings(result.data.data))
        jobPostings.delete().then(result => setJobPostings(result.data.data))
        jobPostings.getAllByApplicationDeadline().then(result => setJobPostings(result.data.data))
    })

    return (
        <div>
            <h1>JobPostings</h1>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Min. Salary</Table.HeaderCell>
                        <Table.HeaderCell>Max. Salary</Table.HeaderCell>
                        <Table.HeaderCell>Open Position Count</Table.HeaderCell>
                        <Table.HeaderCell>publishedAt</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPostings.map(jobPosting => (
                            <Table.Row key={jobPosting.id}>
                                <Table.Cell>{jobPosting.minSalary}</Table.Cell>
                                <Table.Cell>{jobPosting.maxSalary}</Table.Cell>
                                <Table.Cell>{jobPosting.openPositionCount}</Table.Cell>
                                <Table.Cell>{jobPosting.publishedAt}</Table.Cell>
                                <Table.Cell>{jobPosting.deadline}</Table.Cell>
                                <Table.Cell><Link to={`/jobpostings${jobPosting.description}`}>{jobPosting.description}</Link></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
