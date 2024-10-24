import './index.css'
import { useNavigate } from 'react-router-dom';

export const Form_2 = () => {
    const navigate = useNavigate();
    const handlePreviousClick = () => {
        navigate('/'); 
      };
    return (
        <>
            <div className="form-container">
                <div className="card">
                <h2>Registration Form</h2>
                    <br />
                    <h5 className='text-start'>Marital Details:</h5>
                    <br />
                    <form>
                        <div className="form-group text-start">
                            <label htmlFor="schooler-name">
                               WIFE NAME:<span className="required">*</span>
                            </label>
                            <div className="name-field ">
                                <input
                                    type="text"
                                    id="first-name"
                                    name="first-name"
                                    placeholder="First"
                                    required
                                />
                                <input
                                    type="text"
                                    id="last-name"
                                    name="last-name"
                                    placeholder="Last"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="dob">
                                WIFE's DOB:<span className="required">*</span>
                            </label>
                            <input type="date" id="dob" name="parent-phone" placeholder="DOB" required />
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="parent-name">
                                CHILD 1:<span className="required">*</span>
                            </label>
                            <div className="name-field">
                                <input
                                    type="text"
                                    id="parent-first-name"
                                    name="parent-first-name"
                                    placeholder="Name"
                                    required
                                />
                                
                            </div>
                        </div>

                        <div className="form-group">
                            <input  type="date" id="dob" name="parent-phone" placeholder="DOB" required />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="parent-name">
                                CHILD 2:<span className="required">*</span>
                            </label>
                            <div className="name-field">
                                <input
                                    type="text"
                                    id="parent-first-name"
                                    name="parent-first-name"
                                    placeholder="Name"
                                    required
                                />
                                
                            </div>
                        </div>

                        <div className="form-group">
                            <input  type="date" id="dob" name="parent-phone" placeholder="DOB" required />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="parent-name">
                                CHILD 3:<span className="required">*</span>
                            </label>
                            <div className="name-field">
                                <input
                                    type="text"
                                    id="parent-first-name"
                                    name="parent-first-name"
                                    placeholder="Name"
                                    required
                                />
                                
                            </div>
                        </div>

                        <div className="form-group">
                            <input  type="date" id="dob" name="parent-phone" placeholder="DOB" required />
                        </div>
                       

                        <div className="form-group text-start">
                            <label htmlFor="parent-email">
                                Email I'd:<span className="required">*</span>
                            </label>
                            <input type="email" id="parent-email" name="parent-email" required />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="verification">
                                Verification<span className="required">*</span> <br /><br />
                                <input type="checkbox" /> I'm not a robot
                            </label>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <button type="submit" className="btn-submit" onClick={handlePreviousClick}>
                                    Previous
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <button type="submit" className="btn-submit">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};