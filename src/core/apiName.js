import Data from "./dataFlow";

const apiName = {
	apiService:Data
};

export const apiService = {
	getPost:name=>apiName[name],
	getCategoryPost:name=>apiName[name],
	getTagPost:name=>apiName[name],
	getSinglePost:name=>apiName[name],
	getRelatedPost:name=>apiName[name],
	getTagList:name=>apiName[name],
	getCategoriesList:name=>apiName[name],
	getSingleCategory:name=>apiName[name],
	getSingleTag:name=>apiName[name],
}