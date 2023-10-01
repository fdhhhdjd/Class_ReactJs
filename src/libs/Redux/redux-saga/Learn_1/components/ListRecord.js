import React, { useEffect } from 'react';
import { deleteContactsStart, getContactsStart } from '../stores/action';
import useContacts from '../custom_hook/useContacts';
import { Link } from 'react-router-dom';

const ListRecord = () => {
  const { data, loading, error, dispatch } = useContacts();

  const onDelete = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      dispatch(deleteContactsStart(id));
      dispatch(getContactsStart());
    }
  };

  useEffect(() => {
    dispatch(getContactsStart());
  }, []);

  if (error) {
    return alert(error);
  }

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
              <h1 className="display-2">Contact Management System</h1>
            </div>
            {loading ? (
              <h1>....Loading</h1>
            ) : (
              <>
                {Object.entries(data).length !== 0 ? (
                  Object.keys(data).map((id, index) => {
                    return (
                      <React.Fragment key={index}>
                        <table className="table table-bordered table-striped">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">No.</th>
                              <th scope="col">Name</th>
                              <th scope="col">Mobile</th>
                              <th scope="col">Email</th>
                              <th scope="col">Address</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr key={id}>
                              <th scope="row">{index + 1}</th>
                              <td>{data[id].fullName}</td>
                              <td>{data[id].mobile}</td>
                              <td>{data[id].email}</td>
                              <td>{data[id].address}</td>
                              <td>
                                <Link to={`/update/${id}`}>
                                  <p className="btn text-primary">
                                    <i className="fas fa-pencil-alt" />
                                  </p>
                                </Link>

                                <p className="btn text-danger" onClick={() => onDelete(id)}>
                                  <i className="fas fa-trash-alt" />
                                </p>
                                <Link to={`/view/${id}`}>
                                  <p className="btn text-info">
                                    <i className="fas fa-eye" />
                                  </p>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <h1>Empty Data</h1>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRecord;
