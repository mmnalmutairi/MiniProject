import React from 'react';
import { TimeLineContent, Time, Text, Link, Symbol } from './styles';

const TimelineItem = ({ data }) => (


    <div className="timeline-item">
        <TimeLineContent>
            {/* <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span> */}
            <Time>
                {data.date}
            </Time>
            <Text>
                {data.text}
            </Text>
            <Link href={data.link.url} target="_blank"
                rel="noopener noreferrer">
                {data.link.text}
                <Symbol />
            </Link>
            <span className="Circle"></span>
        </TimeLineContent>
    </div>
);


export default TimelineItem;