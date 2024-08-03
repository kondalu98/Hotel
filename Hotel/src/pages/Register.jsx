import React from 'react';
import { useFormik } from 'formik';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Phone: "",
      Date: "",
      Time: "",
      Address: ""
    },
    onSubmit: (values) => {
      fetch('http://localhost:5002/api/send-email', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        })
        .then(response => {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            return response.json();
          } else {
            return response.text(); // Handle non-JSON response
          }
        })
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  });

  return (
    <div>
      <div className="offset-lg-3 col-lg-6 m-100px">
        <form className="container" onSubmit={formik.handleSubmit}>
          <div className="card mt-5">
            <div className="card-header">
              <h1>User Registration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      className="form-control"
                      name='Name'
                      onChange={formik.handleChange}
                      value={formik.values.Name}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      className="form-control"
                      name='Email'
                      onChange={formik.handleChange}
                      value={formik.values.Email}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Phone <span className="errmsg"></span>
                    </label>
                    <input
                      className="form-control"
                      name='Phone'
                      onChange={formik.handleChange}
                      value={formik.values.Phone}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Date <span className="errmsg"></span>
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name='Date'
                      onChange={formik.handleChange}
                      value={formik.values.Date}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Timings <span className="errmsg">*</span>
                    </label>
                    <select
                      className="form-control"
                      name='Time'
                      onChange={formik.handleChange}
                      value={formik.values.Time}
                    >
                      <option value="">----select-timings---</option>
                      <option value="6pm - 10pm">6pm - 10pm (mon-sun)</option>
                      <option value="6am-10pm">6am - 10pm (sat-sun)</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      name='Address'
                      onChange={formik.handleChange}
                      value={formik.values.Address}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
