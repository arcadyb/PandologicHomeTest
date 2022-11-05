export const Actions = {
    // async GET_REQUEST ({ commit }, { symbfrom, symbto }) {
    //   const basurl = 'http://spavuenet5.azurewebsites.net/SamplesData/Intraday'
    //   const url = basurl + '?sfrom=' + symbfrom + '&sto=' + symbto
    //   // commit('SET_DATA', objSeries())
    //   axios.get(url)
    //     .then(response => {
    //       commit('SET_DATA', { from: symbfrom, to: symbto, data: response.data.reverse() })
    //     }
    //     )
    // },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getPageJobs: async () => ({ commit }, { pageNum }) => {
        console.log('getPageJobs pageNum: ' +  pageNum);
        const furl = 'Jobs/?pageId='+ pageNum;
        fetch(furl)
            .then((Response) => Response.json())
            .then((data) => (result.value = data));

        const basurl = 'https://spavuenet5.azurewebsites.net/SamplesData/Intraday';
        const url = basurl + '?sfrom=' + fromSymb + '&sto=' + toSymb;
        // const url = '/SamplesData/Intraday?sfrom=' + fromSymb + '&sto=' + toSymb
        axios.get(url)
            .then(response => {
            // commit('ADD_SYMBOL', { symb })
            sleep(10000).then(() => commit('SET_DATA', { symb: symb, data: response.data.reverse() }));
        });
    },
    async ADD_FIN_SYMBOL({ commit, dispatch }, { symb }) {
        const fromSymb = symb.substring(0, 3);
        const toSymb = symb.substring(3, 6);
        const basurl = 'https://spavuenet5.azurewebsites.net/SamplesData/Intraday' + '?sfrom=' + fromSymb + '&sto=' + toSymb;
        // const basurl = '/SamplesData/Intraday?sfrom=' + fromSymb + '&sto=' + toSymb
        // const url = basurl + '?sfrom=' + fromSymb + '&sto=' + toSymb
        //
        const response = await axios.get(basurl);
        // commit('ADD_SYMBOL', { symb })
        commit('SET_FIN_DATA', { symb: symb, data: response.data.reverse() });
        dispatch('SAVE_KEYS', { name: 'init' });
    },
    SAVE_KEYS({ commit, state }, { name }) {
        const mapIter = state.charts.keys();
        const keys = new Array();
        let nval = mapIter.next().value;
        while (nval) {
            keys.push(nval);
            nval = mapIter.next().value;
        }
        localStorage.setItem(name, JSON.stringify(keys));
    },
    async RESTORE_KEYS({ commit, dispatch, state }, { name }) {
        try {
            const symbols = JSON.parse(localStorage.getItem(name) || '');
            let cnt = 1;
            if (symbols && symbols.length > 0) {
                await symbols.forEach(async function (item) {
                    sleep(9000 * cnt++).then(async () => await dispatch('ADD_FIN_SYMBOL', { symb: item }));
                    // await dispatch('ADD_FIN_SYMBOL', { symb: item })
                });
                // eslint-disable-next-line no-lone-blocks
            }
        }
        catch (error) {
            console.log(error);
        }
    },
    async SET_SELECTED({ commit, dispatch, state }, { name }) {
        state.selectedSymb = name;
    },
    async DEL_SELECTED({ commit, dispatch, state }) {
        state.charts.delete(state.selectedSymb);
        state.selectedSymb = '';
        dispatch('SAVE_KEYS', { name: 'init' });
    }
};
//# sourceMappingURL=symbols-data-actions.js.map