import styled from "styled-components";

// export const Tag = styled.span`
// background: data.category.color;
// `;

export const Header = styled.h1`
text-align: center;
`;

export const Container = styled.p`
display: flex;
flex-direction: column;
margin: 40px 0;
text-align: center;
position: relative;
`;

export const TimelineItemTheme = styled.p`
background-color: purple;
display: flex;
justify-content: flex-end;
padding-right: 20px;
margin: 10px 0;
width: 50%;
`;

export const TimeLineContent = styled.p`
background-color: #ffff;
border-radius: 7px;
box-shadow: 0 0 5px rgba(0,0,0,3);
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 15px;
max-width: 70%;
width: 300px;
text-align: center;
`;

export const Time = styled.time`
color: #7777;
font-size: 12px;
`;

export const Text = styled.p`
font-weight: bold;
font-size: 16px;
line-height: 24px;
margin: 15px 0;
max-width: 250px;
`;

export const Link = styled.a`
color: #333;
text-decoration: none;
font-size: 14px;
`;

export const Symbol = styled.a`
content: '👉🏻';
font-size: 12px;
`;