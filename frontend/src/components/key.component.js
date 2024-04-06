import '../App.css'

const KeyComponent = () => {
    return (
        <div className="container key-password">
            <div className="row">
                <div className="col-md-12 col-md-offset-4">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="text-center">
                                <img src="https://i.ibb.co/rshckyB/car-key.png" alt="car-key" border="0" />
                                <h2 className="text-center">Enter Your Plan Key</h2>
                                <p>You can enter your plan here.</p>
                                <form id="register-form" role="form" autoComplete="off" className="form" method="post">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <input id="forgetAnswer" name="forgetAnswer" placeholder="Answer" className="form-control" type="text" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input name="btnKey" className="btn btn-lg btn-primary btn-block btnForget" value="Enter" type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KeyComponent;
