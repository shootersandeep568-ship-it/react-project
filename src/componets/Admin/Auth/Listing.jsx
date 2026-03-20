import { Component } from "react";
import Api from "./Api";

class Listings extends Component {

    async login(data) {
        return Api.post("Product/Login", data)
    }

    async Singup(alldata) {
        return Api.post("Product/signup", alldata)
    }

    // async Product(){
    //     return Api.get("cart/Productapi")
    // }

    render() {
        return <></>;
    }
}

export default Listings;