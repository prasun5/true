import Vue from "vue";
import axios from "axios";


const baseDomain = "https://public-api.wordpress.com/rest/v1.1/";
const baseURL = `${baseDomain}`;


export default axios.create({
	baseURL
})