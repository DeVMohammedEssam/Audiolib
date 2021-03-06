
import React, { Component } from 'react';
import AnalysisCard from "./layout/AnalysisCard";
import money from "money"
import formatCurrency from 'format-currency'
import config from "../config"
import axios from "axios"
class Analysis extends Component {
    state = {
        views: 0,
        books: 0,
        requests: 0,
        loaded: false
   
    }
    componentDidMount = () => {
        axios.get(`${config.serverURL}/api/dashboard/analysis`).then((response) => {
            const data = response.data;
            this.setState({ views: data.users, books: data.books, loaded: true, requests: data.requests })
        })
    }
    render() {
        return (

            <div className="Analysis " >

                {this.state.loaded ? <div className="row justify-content-center">
                    <div className="col-12 col-lg-3 mb-4" >
                        <AnalysisCard src="fa fa-eye fa-default" text="المشاهدات" number={String(formatCurrency(this.state.views).replace(".00", ""))} />
                    </div>
                    <div className="col-12 col-lg-3 mb-4">
                        <AnalysisCard src="fas fa-book fa-green" text="الكتب" number={String(formatCurrency(this.state.books).replace(".00", ""))} />
                    </div>
                    <div className="col-12 col-lg-3">
                        <AnalysisCard src="fa fa-eye fa-yellow" text="الطلابات" number={String(formatCurrency(this.state.requests).replace(".00", ""))} />
                    </div>

                </div> : <div className="loader">

                        <img src="/805(2).gif" />
                    </div>}



            </div>

        );
    }
}

export default Analysis;