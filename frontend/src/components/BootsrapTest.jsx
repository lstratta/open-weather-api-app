
export default function BootstrapTest () {


    return(
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">col-one</div> 
                    <div className="col-sm-6 col-md-6 col-lg-6">col-two</div> 
                </div>

                <div className="row ">
                    <div className="col-sm-4 order-md-2">col one</div>
                    <div className="col-sm-4 order-md-1">col two</div>
                </div>

                <div className="row ">
                    <div className="col-sm-4 order-md-2 offset-2">col one</div>
                    <div className="col-sm-4 order-md-1 offset-1">col two</div>
                </div>

                <div className="row my-custom-row ">
                    <div className="col-sm-4 order-md-2 offset-2"> <div className="p-3 border bg-light">col one</div> </div>
                    <div className="col-sm-4 order-md-1 offset-1"> <div className="p-3 border bg-light">col two</div> </div>
                </div>
            </div>

        </div>
    );
}