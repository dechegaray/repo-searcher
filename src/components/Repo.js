import React from 'react';

const repo = (props) => {
    const { repo } = props;

    return (
        <li className="repo list-group-item">
            <a className="w-100 d-block" href={repo.html_url}>{repo.name}</a>
            <span className="text-info d-inline-block">{repo.created_at}</span> | <span className="d-inline-block">{repo.language}</span>
            <p className="w-100">{repo.description}</p>
        </li>
    );
}

export default repo;