import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { courses } from './Data';
import Course from './Components/Course';
import './css/Course.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </div>
  )
}

export default App
