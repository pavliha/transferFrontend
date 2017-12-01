import React from 'react'

export default ({total, children, user}) => <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className='container'>
            <a className="navbar-brand" href="#"><img src='/assets/logo.svg'/> </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active mx-2">
                        <a className="nav-link" href="#">Get Inspired <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#">My trips</a>
                    </li>
                    <li className="nav-item mx-4 text-center">
                        <a className="nav-link" href="#"><i className='fa  fa-comment-o'/> </a>
                    </li>
                </ul>
                <div className="my-2 my-lg-0 d-flex align-items-center mx-2">
                    <div className='dummy-avatar'/>
                    <span className='ml-2'>{user ? user.name : "Anonymous user"}</span>
                </div>
            </div>
        </div>
    </nav>

    <section className='container mt-4 '>
        <h4 className='text-muted'>Matching trips</h4>
        <p className='pt-3 pb-2'>{total ? total + ' results' : ''}</p>
        <div className='d-flex flex-wrap justify-content-between animated ZoomIn'>
            {children}
        </div>
    </section>
</div>