import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage () {


    return (
        <div>

            <form action="">
                <div className='row justify-content-center'>

                    <div className="col-5 mb-3 mt-3">
                            <input 
                            className='form-control form-control-lg' 
                            type="text" 
                            name="location" 
                            id="" 
                            placeholder='Find a city...'
                            />
                    </div>                        

                    <div className='col-1 mb-3 mt-3'>
                        <button className='btn btn-lg btn-primary' >Search</button>
                    </div>

                </div>
            </form>

            
                
            <div className='row'>



            </div>

        </div>
    );
}