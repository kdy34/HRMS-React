import React, {useState} from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import './Navbar.css';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    function handleSignOut(params) {
        setIsAuthenticated(false)
    }

    return (
        <div className="navbar">
            <Menu inverted fixed="top" size='large'>
                <Container>
                    <Menu.Item className="home"
                        name='HRMS'

                    />


                    <Menu.Menu position="right">
                        {isAuthenticated ? (
                            <SignedIn signOut={handleSignOut} />
                        ) : (
                            <SignedOut signIn={handleSignIn} />
                        )}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
