import React from 'react';
import Repo from './Repo';

const repoList = (props) => {
    const { repos } = props;

    return (
        <ul className="list-group text-left mt-3 mb-3">
            { repos.map( repo => (<Repo key={repo.id} repo={repo} />))}
        </ul>
    );
}

export default repoList;