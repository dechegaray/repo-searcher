import React from 'react';

const profile = (props) => {
    const { user } = props;

    if (!user) {
        return (
            <div className="card">
                <div className="card-header">
                    <h3>User not found</h3>
                </div>
            </div>
        );
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3>{user.name} <span className="text-bold">({user.id})</span></h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        <img className="w-100 avatar" src={user.avatar_url} title="profile picture" alt="Profile avatar of the user in github" />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <span className="badge badge-primary mr-2">{user.public_repos} Repos</span>
                                <span className="badge badge-success mr-2">{user.public_gists} Public gists</span>
                                <span className="badge badge-info mr-2">{user.followers} Followers</span>
                                <span className="badge badge-danger">{user.following} Following</span>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12">
                                <ul className="list-group text-left">
                                    <li className="list-group-item"><b>Login:</b> {user.login}</li>
                                    <li className="list-group-item"><b>Location:</b> {user.location ? user.location : 'Not provided'}</li>
                                    <li className="list-group-item"><b>Company:</b> {user.company ? user.company : 'Not provided'}</li>
                                    <li className="list-group-item"><b>Blog:</b> {user.blog ? user.blog : 'Not provided'}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default profile;