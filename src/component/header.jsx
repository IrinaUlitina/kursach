import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header(params) {
    return (
        <header className="header">
            <Navbar expand="lg" bg="dark " variant="dark ">
                <Container>
                    <Navbar.Brand href="/">
                        {"SoccerStat"}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                className={
                                    params.link ===
                                        "ligi" && "active"
                                }
                                href="/"
                            >
                                Лиги
                            </Nav.Link>
                            <Nav.Link
                                className={
                                    params.link ===
                                        "komand" && "active"
                                }
                                href="/komand"
                            >
                                Команды
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
