import React, { Component } from 'react'
import RequestsCard from "./layout/RequestsCard"
export default class Requests extends Component {
  render() {
    return (
      <div>
        <div className="requests">

          <div className="row">
            <div className="col-12">
              <RequestsCard email={"try@yahoo.com"} phone={"01122366997"} name={"Mohamed Salah"} message={" الورق أو الكَاغِد، هو مادة رقيقة مسطحة تنتج من لب الورق المنتج عن طريق ضغط الألياف السيليلوزية للخضروات، الألياف تكون عادة طبيعية، بحيث تتكون أساسا من السيليولوز، وتستخدم مادة تلك الصفحات في الكتابة والطباعة وتغليف جدران المنازل وأكياس المطابخ."} />
            </div>
               <div className="col-12">
              <RequestsCard email={"try@yahoo.com"} phone={"01122366997"} name={"Mohamed Salah"} message={" الورق أو الكَاغِد، هو مادة رقيقة مسطحة تنتج من لب الورق المنتج عن طريق ضغط الألياف السيليلوزية للخضروات، الألياف تكون عادة طبيعية، بحيث تتكون أساسا من السيليولوز، وتستخدم مادة تلك الصفحات في الكتابة والطباعة وتغليف جدران المنازل وأكياس المطابخ."} />
            </div>
          </div>





        </div>

      </div>
    )
  }
}
