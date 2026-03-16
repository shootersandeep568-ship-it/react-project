import { Component } from "react";
import Api from "./Api";

class Listings extends Component {

    async login(data) {
        return Api.post("Product/Login", data)
    }

    async Singup(alldata) {
        return Api.post("Product/signup", alldata)
    }


    render() {
        return <></>;
    }
}

export default Listings;