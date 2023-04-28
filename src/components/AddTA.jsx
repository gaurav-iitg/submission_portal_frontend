import React, { useState } from 'react'
import { nclient } from '../config/client';
import Loading from './Loading';

const AddTA = ({courseId}) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);
    const [ta, setTa] = useState({
        _id: '',
        name: '',
        email: '',
        roll: '',
    });
    const [isTA, setIsTA] = useState(false);
    const [searched, setSearched] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        nclient.post('student/get', {
            email: email,
            courseId: courseId,
        },
        {
            headers: {
                Authorization: localStorage.getItem('token'),
            }
        }
        ).then((res) => {
            setTa(res.data.user);
            setIsTA(res.data.isTA);
            setSearched(true);
            setLoading(false);
        }).catch((err) => {
            alert("Error in fetching TA details")
            setLoading(false);
        })
    }
    const handleTA = (e) => {
        e.preventDefault();
        setLoading(true);
        const url = isTA ? `/faculty/remove/${courseId}` : `/faculty/add/${courseId}`;
        nclient.post(url, {
            facultyId : ta._id
        },
        {
            headers : {
                Authorization: localStorage.getItem('token'),
            }
        }
        ).then((res) => {
            setIsTA(!isTA);
            setLoading(false);
        }).catch((err) => {
            console.log(err.response);
            setLoading(false);
        }
        );
    }
  return (
    <div className='flex flex-col items-center w-full p-5'>
        <h1 className='text-xl mb-4'>
            Enter the email of the TA you want to add/remove from course
        </h1>
        <div className='w-1/2 flex flex-row mb-4'>
            <input className='w-full p-2 border-2 border-gray-400 rounded-lg' type='text' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value);setSearched(false);setLoading(false)}}/>
            <button onClick={handleSearch} className='ml-2 w-20 bg-blue-700 text-white p-2 border-2 border-gray-400 rounded-lg' type='button'>Search</button>
        </div>
        {loading ? <Loading /> : searched ? (
            <table className="w-full table-auto my-4">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Student Name</th>
                <th className="text-left px-4 py-2">Roll Number</th>
                <th className="text-left px-4 py-2">Email</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td className="border px-4 py-2">{ta.name}</td>
                  <td className="border px-4 py-2">{ta.roll}</td>
                  <td className="border px-4 py-2">{ta.email}</td>
                  <td className="border px-4 py-2">
                    <button onClick={handleTA} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {isTA ? 'Remove' : 'Add'}
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        ) : (
            <div className="text-lg my-4">
                Type email of TA/Faculty and click search to add/remove them from the course
            </div>
        )}
    </div>
  )
}

export default AddTA