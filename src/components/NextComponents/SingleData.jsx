import React from 'react';

const SingleData = (props) => {

    // console.log(props);

    const { id, image, features, name, published_in } = props.singleData;


    // console.log(image);
    return (
        <>
            <div className="card w-full h-full glass text-black rounded-2xl shadow-2xl border-2 bg-secondary">
                <figure><img className='w-full h-full' src={image} alt="Not Found This Image In Api !!! You Should Not Worry About This Card. Its in Correct Position. You Should See The Bellow Componnet Of This Card !!" /></figure>
                <div className="card-body m-0 ">
                    <h2 className="card-title font-bold">Features</h2>

                    <div className=' text-justify'>
                        {
                            features.map((feature, index) =>
                                <p>{index + 1}. {feature}</p>
                            )
                        }
                    </div>
                    <hr className='text-accent' />
                    <div className="card-actions justify-between my-2 ">
                        <div>
                            <h1 className='font-bold text-2xl'>{name}</h1>
                            <div className='flex align-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                                </svg>
                                <span className='ml-2'>{published_in}</span>
                            </div>
                        </div>
                        <label onClick={() => props.setUniqueId(id)} htmlFor="my-modal" className="btn btn-accent mt-2">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>




        </>
    );
};

export default SingleData;