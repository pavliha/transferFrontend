import React from 'react';

export default ({name}) => {
    return (
        <main className="bg-white bg-planes" style={{height: '100vh'}}>
            <section className='mt-5 d-flex justify-content-center align-items-center text-center'>
                <div>
                    <h2 className='p-4'>Welcome{name ? ", " + name + '.' : ''}</h2>
                    <div className='lead' style={{width: 450}}>
                        My chefs are looking at your family profile and will suggest trips soon.
                        Meanwhile...
                    </div>
                    <div className='mt-5'>
                        <img src='/assets/girl.svg'/>
                    </div>
                </div>
            </section>
        </main>
    )
}