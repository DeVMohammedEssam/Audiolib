
import React, { Component } from 'react';
import AnalysisCard from "./layout/AnalysisCard";
class Analysis extends Component {
    state = {}
    render() {
        return (

            <div className="Analysis">
                <AnalysisCard src="http://placehold.it/100/100" text="text" number="123" />

                <AnalysisCard src="http://placehold.it/100/100" text="text" number="123" />

                <AnalysisCard src="http://placehold.it/100/100" text="text" number="123" />

                <AnalysisCard src="http://placehold.it/100/100" text="text" number="123" />

            </div>

        );
    }
}

export default Analysis;