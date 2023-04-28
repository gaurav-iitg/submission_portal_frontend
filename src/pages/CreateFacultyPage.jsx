import React, { useState } from 'react'
import { nclient } from '../config/client';
import Loading from '../components/Loading';

const CreateFaculty = ({courseId}) => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false);
    const [ta, setTa] = useState({
        _id: '',
        name: '',
        email: '',
        is_faculty: false,
    });
    const [searched, setSearched] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        setLoading(true);
        nclient.post('admin/get', {
            email: email,
        },
        {
            headers: {
                Authorization: localStorage.getItem('admin_token'),
            }
        }
        ).then((res) => {
            setTa(res.data.user);
            setSearched(true);
            setLoading(false);
        }).catch((err) => {
            alert("Error in fetching Faculty details")
            setLoading(false);
        })
    }
    const handleTA = (e) => {
        e.preventDefault();
        setLoading(true);
        const url = ta.is_faculty ? `/admin/remove/${ta._id}` : `/admin/add/${ta._id}`;
        nclient.get(url, {
            headers : {
                Authorization: localStorage.getItem('admin_token'),
            }
        }
        ).then((res) => {
            setTa(res.data.user);
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
            Enter the email of the Faculty you want to add/remove
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
                <th className="text-left px-4 py-2">Email</th>
                <th className="text-left px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td className="border px-4 py-2">{ta.name}</td>
                  <td className="border px-4 py-2">{ta.email}</td>
                  <td className="border px-4 py-2">
                    <button onClick={handleTA} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        {ta.is_faculty ? 'Remove Faculty' : 'Make Faculty'}
                    </button>
                  </td>
                </tr>
            </tbody>
          </table>
        ) : (
            <div className="text-lg my-4">
                Type email of Faculty and click search to add/remove them as faculty
            </div>
        )}
    </div>
  )
}

export default CreateFaculty