import React from 'react';

const search = (props) => {
    const {onSearchSubmit, onSearchChange, search} = props;

    return (
        <div className="mt-3">
            <form name="search-form" onSubmit={onSearchSubmit}>
                <div class="form-group">
                    <input
                        className="form-control" 
                        type="search"
                        name="search-input"
                        placeholder="Search..."
                        value={search}
                        onChange={onSearchChange}
                    />
                </div>
            </form>
        </div>
    );
}

export default search;