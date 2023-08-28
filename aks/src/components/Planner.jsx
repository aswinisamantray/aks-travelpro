import React from 'react'
import { Link } from 'react-router-dom'
import Calendar from './Calendar';

const Planner = () => {
    const bgColor={background:'linear-gradient(90deg, hsla(141, 81%, 87%, 1) 0%, hsla(41, 88%, 75%, 1) 50%, hsla(358, 82%, 71%, 1) 100%)'};
  return (
    <div>
            <section className="vh-100 gradient-custom-2 overflow-scroll mt-5">
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">

                <div className="card mask-custom" style={bgColor}>
                <div className="card-body p-4 text-white">

                    <div className="text-center pt-3 pb-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                        alt="Check" width="60" />
                    <h2 className="my-4">Your Bucketlist</h2>
                    </div>

                    <table className="table text-white mb-0">
                    <thead>
                        <tr>
                        <th scope="col">Location</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Date</th>
                        <th scope="col">Manage</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr className="fw-normal">
                        <th>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                            alt="avatar 1" style={{width:'45px', height:'auto'}} />
                            <span className="ms-2">Alice Mayer</span>
                        </th>
                        <td className="align-middle">
                            <span>Call Sam For payments</span>
                        </td>
                        <td className="align-middle">
                            <h6 className="mb-0"><span className="badge bg-black"><Calendar/></span></h6>
                        </td>
                        <td className="align-middle">
                            <Link to="#!" data-mdb-toggle="tooltip" title="Done"><i
                                className="fas fa-check fa-lg text-success me-3"></i></Link>
                            <Link to="#!" data-mdb-toggle="tooltip" title="Remove"><i
                                className="fas fa-trash-alt fa-lg text-warning"></i></Link>
                        </td>
                        </tr>
                    </tbody>
                    </table>


                </div>
                </div>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Planner
