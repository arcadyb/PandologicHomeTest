
function ToGoogle(dtApi) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task');
    data.addColumn('number', 'Hours per Day');
    data.addRows([
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', { v: 7, f: '7.000' }]
    ]);
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
 ////           .then((Response) => Response.json())
 //           .then((data) =>{ 
 //               commit('SET_CHART_DATA', { page: pageNum, data: data });
            });
        }
        catch(error)
        {
            console.log(error); 
        }

    },
    async ['getPageJobs1'] ({ commit }, { pageNum }) {
        try {
          commit('setLoading', true);
          const { data } = await http('https://apiUrlExample/data');
          commit('setData', data);
    
        } catch (error) {
          commit('setError', error);
          
          throw error;
        } finally {
          commit('setLoading', false);
        }
      }
    
};
