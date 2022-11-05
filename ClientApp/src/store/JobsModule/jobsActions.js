export const Actions = {
 
    getPageJobs: async () => ({ commit }, { pageNum }) => {

        console.log('getPageJobs pageNum: ' +  pageNum);
        try{
        const furl = 'Jobs/?pageId='+ pageNum;
        fetch(furl)
            .then((Response) => Response.json())
            .then((data) =>{ 
                commit('SET_CHART_DATA', { page: pageNum, data: data });
            });
        }
        catch(error)
        {
            console.log(error); 
        }

    }

};
//# sourceMappingURL=symbols-data-actions.js.map