import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Courses.module.css';

const Courses: React.FC = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: 1,
      title: '基础呼吸',
      duration: '5分钟',
      level: '初级',
      image: 'https://api.redare.cn/resource/image/public/2025/01/20/678df2de7aa6ab07ac86661f@3000x4000.jpg?scale=512x512'
    },
    {
      id: 2,
      title: '专注力训练',
      duration: '10分钟',
      level: '中级',
      image: 'https://via.placeholder.com/200x120'
    },
    {
      id: 3,
      title: '睡眠引导',
      duration: '15分钟',
      level: '初级',
      image: 'https://via.placeholder.com/200x120'
    },
    {
      id: 4,
      title: '减压放松',
      duration: '20分钟',
      level: '中级',
      image: 'https://via.placeholder.com/200x120'
    }
  ];

  const handleCourseClick = (id: number) => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className={styles.courses}>
      <h2 className={styles.title}>冥想课程</h2>
      <div className={styles.courseList}>
        {courses.map(course => (
          <div 
            key={course.id} 
            className={styles.courseItem}
            onClick={() => handleCourseClick(course.id)}
          >
            <img src={course.image} alt={course.title} className={styles.courseImage} />
            <div className={styles.courseInfo}>
              <h3>{course.title}</h3>
              <p>{course.duration} · {course.level}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses; 