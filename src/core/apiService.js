import Vue from "vue";
import axios from "axios";


const baseDomain = "https://public-api.wordpress.com/rest/v1.1/sites";
const baseURL = `${baseDomain}/107403796`;

export default axios.create({
	baseURL
})