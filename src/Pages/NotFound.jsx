import React from "react";
import { Link } from "react-router-dom";
import { NotFoundDiv } from "../Styled/Styled";

export default function NotFound(){
    return(
        <NotFoundDiv>
            <h1>404 Not Found by Flamerson.</h1>
            <Link to="/">Return to Start.</Link>
        </NotFoundDiv>
    );
};