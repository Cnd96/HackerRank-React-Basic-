import React, {  useState } from 'react';

function Articles(props) {
    const [articles]=useState(props.articles);
    
   
    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    articles.map((article, index) => 
                    (
                      <tr data-testid="article" key={index}>
                        <td data-testid="article-title">{article.title}</td>
                        <td data-testid="article-upvotes">{article.upvotes.toString()}</td>
                        <td data-testid="article-date">{article.date}</td>
                    </tr>
                    ))
                  }
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
// "start": "cross-env HOST=0.0.0.0 PORT=8000 ./node_modules/.bin/react-scripts start",