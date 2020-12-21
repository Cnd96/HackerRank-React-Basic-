import React, { useEffect, useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {
    const [articlesToPass,setArticlesToPass]=useState(articles);
    useEffect(() => {
        sortByVotes();
    }, [])


    const sortByDate = () => {
        const tempArticles=articles.sort((b,a) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0)); 
        setArticlesToPass([...tempArticles])
    }

    const sortByVotes = () => {
        const tempArticles=articles.sort((b,a) => (a.upvotes > b.upvotes) ? 1 : ((b.upvotes > a.upvotes) ? -1 : 0)); 
        setArticlesToPass([...tempArticles])
    }
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={sortByVotes}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small"  onClick={sortByDate}>Most Recent</button>
            </div>
            <Articles articles={articlesToPass}/>
        </div>
    );

}

export default App;
