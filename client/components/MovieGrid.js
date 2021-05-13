import React, { useEffect } from 'react';
import { Grid, Segment } from 'semantic-ui-react'

/*
Grid Presntational component implemented with Semantic UI
*/



export const MovieGrid = props => {
    useEffect(() => {
        console.log("sort", props.sort);
      }, [props.sort]);

    return (
            <Grid style={{height:"700px", width:"1200px", overflow: "scroll"}}>
                <div class="ui celled grid">
                {/* <Grid.Row>{props.fields.map(field => <Grid.Column width={4}><b>{field}</b></Grid.Column>)}</Grid.Row> */}
                {
                    // ["Movie", "Overview", "Release Date", "Language"]
                    props.rowData.map(row => 
                                            <Grid.Row>
                                                {/* <Segment> */}
                                                    {props.fields.map(
                                                        field =>
                                                        <Grid.Column width={4}>
                                                                {/* <Segment> */}
                                                                {row[field]}
                                                                {/* </Segment> */}
                                                        </Grid.Column>
                                                    )}
                                                {/* </Segment> */}
                                             </Grid.Row>
                                      )
                }
                </div>
            </Grid>
    );
}