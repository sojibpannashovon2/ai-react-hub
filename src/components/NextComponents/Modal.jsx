import React from 'react';

const Modal = (props) => {
    console.log(props.modalData);
    const { features, input_output_examples, image_link, integrations, description, pricing, accuracy } = props.modalData
    return (
        <>

            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-5xl  text-black">



                    <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-warning ">
                        <div className="card-body border-2 border-secondary mr-4 w-6/12">
                            <p className="card-title">{description}</p>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-xl font-bold my-2'>Features:</h1>
                                    {
                                        features && Object.values(features || {}).map(value => <p className='text-left'>{value.feature_name ? value.feature_name : "Not found !!!"}</p>)
                                    }
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold my-2'>Intregations:</h1>
                                    {
                                        integrations && integrations.map(value => <p>{value ? value : "Not found !!!"}</p>)
                                    }
                                </div>
                            </div>

                        </div>
                        <div className=' w-6/12 border-2 border-secondary '>
                            <figure><img className='' src={image_link && image_link[0]} alt="Album" /></figure>
                            <br />

                            {
                                input_output_examples && input_output_examples[0].input
                            }
                            <br />

                            {
                                input_output_examples && input_output_examples[0].output
                            }
                        </div>

                        <label htmlFor="my-modal" className="btn ml-4">cancel</label>

                    </div>




                </div>
            </div>

        </>
    );
};

export default Modal;