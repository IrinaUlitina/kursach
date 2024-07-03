import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";

function ItemsKomand({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item, index) => (
                    <NavLink
                        className="card ligi_card flex"
                        key={index}
                        to={`/komand/${item.id}`}
                    >
                       
                        <Card.Title className="ligi_card_title">
                            {item.name}
                        </Card.Title>
                        {item.crest && (
                            <Card.Img
                                className="ligi_card_img"
                                variant="bottom"
                                src={item.crest}
                            />
                        )}
                        {/* <Card.Text>
                            {item.area.name}
                        </Card.Text> */}
                    </NavLink>
                ))}
        </>
    );
}

export default function PaginatedKomand({
    itemsPerPage,
    items,
    itemsBlock,
}) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(
        items.length / itemsPerPage
    );

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset =
            (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Container className="ligi_list">
                <ItemsKomand currentItems={currentItems} />
            </Container>
            <ReactPaginate
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </>
    );
}
