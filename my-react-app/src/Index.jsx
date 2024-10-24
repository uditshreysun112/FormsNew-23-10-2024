import './index.css'
import { useNavigate } from 'react-router-dom';

export const Index = () => {
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate('form_2');  // This will navigate to the 'form_2' page when clicked
      };
    return (
        <>
            <div className="form-container">
                <div className="card">
                    <h2>Registration Form</h2>
                    <br />
                    <h5 className='text-start'>Personal Details:</h5>
                    <br />
                    <form>
                        <div className="form-group ">
                            <div className='text-start'>
                                <label htmlFor="schooler-name">
                                    NAME:<span className="required ">*</span>
                                </label>
                            </div>
                            <div className="name-field">
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
                            <label htmlFor="parent-name">
                                PHONE:<span className="required">*</span>
                            </label>
                            <div className="name-field">
                                <input
                                    type="text"
                                    id="parent-first-name"
                                    name="parent-first-name"
                                    placeholder="Phone 1"
                                    required
                                />
                                <input
                                    type="text"
                                    id="parent-last-name"
                                    name="parent-last-name"
                                    placeholder="Phone 2"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="dob">
                                DATE OF BIRTH:<span className="required">*</span>
                            </label>
                            <input type="date" id="dob" name="parent-phone" placeholder="DOB" required />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="parent-phone">
                                PLACE OF BIRTH:<span className="required">*</span>
                            </label>
                            <input type="text" id="parent-phone" name="parent-phone" placeholder="Place" required />
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="parent-email">
                                Email I'd:<span className="required">*</span>
                            </label>
                            <input type="email" id="parent-email" name="parent-email" required />
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="nearest-airport">
                                NEAREST AIRPORT:<span className="required">*</span>
                            </label>
                            <input type="text" id="nearest-airport" name="" required />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="bank-name">
                                BANK NAME AND BRANCH:<span className="required">*</span>
                            </label>
                            <input type="text" id="bank-name" name="" required />
                        </div>
                        <div className="form-group text-start">
                            <label htmlFor="account-no">
                                ACCOUNT NO :<span className="required">*</span>
                            </label>
                            <input type="text" id="account-no" name="" required />
                        </div>

                        <div className="form-group text-start">
                            <label htmlFor="verification">
                                Verification<span className="required">*</span> <br /><br />
                            <input type="checkbox" /> I'm not a robot
                            </label>
                        </div>

                        <div className="form-group">
                            <button type="next" className="btn-submit" onClick={handleNextClick}>
                                Next
                            </button>
                           
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};