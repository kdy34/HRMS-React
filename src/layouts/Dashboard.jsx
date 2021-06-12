import React from 'react'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList'
import { Route } from "react-router"
import JobPostingList from "../pages/JobPostingList"
import JobPostingAdd from '../pages/JobPostingAdd'

export default function Dashboard() {
    return (
        <div>
            <Navi />
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <CandidateList />
                        <EmployerList />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/jobpostings" component={JobPostingList} />
                        <Route exact path="/jobpostings/add" component={JobPostingAdd} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
