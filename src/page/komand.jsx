import { useState } from "react";
import {
    Alert,
    Container,
    Form,
    InputGroup,
} from "react-bootstrap";
import PaginatedKomand from "../component/paginacionKomand";
import useDataFetch from "../ajax/fetch";

export default function Ligi(params) {
    const [isLoaded, error, items] = useDataFetch({url:'teams/'});
    const [filter, setFilter] = useState("");
    return (
        <main className="ligi" data-bs-theme="dark">
            <Container className="ligi_box">
                <div className="ligi_menu">
                    <InputGroup size="sm" className="mb-1">
                        <Form.Control
                            placeholder="Поиск"
                            aria-label="Поиск"
                            aria-describedby="basic-addon2"
                            onChange={(event) =>
                                setFilter(
                                    event.target.value
                                )
                            }
                        />
                        <InputGroup.Text id="basic-addon2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </InputGroup.Text>
                    </InputGroup>
                </div>
                <div className=" ligi_content flex">
                    {error ? (
                        <Alert variant="danger" dismissible>
                            <Alert.Heading>
                                Ооо-пс! Возникла ошибка
                            </Alert.Heading>
                            <p>{String(error)}</p>
                        </Alert>
                    ) : !isLoaded ? (
                        <p>Загрузка</p>
                    ) : (
                        <>
                            <PaginatedKomand
                                items={filterMass({
                                    mass: items.teams,
                                    value: filter,
                                })}
                                itemsPerPage={9}
                            />
                        </>
                    )}
                </div>
            </Container>
        </main>
    );
}

function filterMass({ mass, value }) {
    let filterMass = mass.filter((element) => {
        return element.name
            .toLowerCase()
            .includes(value.toString().toLowerCase());
    });
    return filterMass;
}
