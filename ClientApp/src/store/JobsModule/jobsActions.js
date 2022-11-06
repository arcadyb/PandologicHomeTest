
function ToGoogle(dtApi) {
    var data = new google.visualization.DataTable();
    ["", "Cumulative job views", "Cumulative predicted job views", "Active jobs"]
    data.addColumn('string', 'Date');
    data.addColumn('number', 'Cumulative job views');
    data.addColumn('number', 'Cumulative predicted job views');
    data.addColumn('number', 'Active jobs');
    dtApi.forEach(element => {
        console.log(element)
        data.addRow([element[0], parseInt(element[1]), parseInt(element[2]), parseInt(element[3])]);
    });


    console.log('ToGoogle : ' + data);
    return data;
}
export const Actions = {
 
    async ['getPageJobs'] ({ commit }, { pageNum }) {

        console.log('getPageJobs pageNum: ' +  pageNum);
        try{
        const furl = 'Jobs/?pageId='+ pageNum;
            const Response = await fetch(furl);
            Response.json().then((data) => {
                const googledata = ToGoogle(data.dataTable);

                commit('SET_CHART_DATA', { page: pageNum, data: googledata });
 
            });
        }
        catch(error)
        {
            console.log(error); 
        }

    },
     
};
